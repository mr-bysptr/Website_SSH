import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { buildWhatsAppUrl, services, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  company: z.string().trim().min(2, "Enter your company").max(120),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a phone number").max(40),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Add a short message (min 10 chars)").max(1200),
});

type FormValues = z.infer<typeof schema>;

export function InquiryForm({ defaultService, className }: { defaultService?: string; className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      service: defaultService ?? "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const message = [
      `New quotation request — ${site.name}`,
      ``,
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      data.role ? `Role: ${data.role}` : null,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service of interest: ${data.service}`,
      ``,
      `Message:`,
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    toast.success("Opening WhatsApp with your enquiry — press send to deliver it.");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-card md:p-8",
        className,
      )}
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message} htmlFor="f-name">
          <Input id="f-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Company" error={errors.company?.message} htmlFor="f-company">
          <Input id="f-company" autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Role" error={errors.role?.message} htmlFor="f-role">
          <Input id="f-role" placeholder="e.g. HSE Manager" {...register("role")} />
        </Field>
        <Field label="Work email" error={errors.email?.message} htmlFor="f-email">
          <Input id="f-email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message} htmlFor="f-phone">
          <Input id="f-phone" type="tel" autoComplete="tel" placeholder="+62 …" {...register("phone")} />
        </Field>
        <Field label="Service of interest" error={errors.service?.message} htmlFor="f-service">
          <select
            id="f-service"
            {...register("service")}
            className="flex h-10 w-full items-center rounded-md border border-input bg-surface px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Rental Gas Detector">Rental Gas Detector</option>
            <option value="Retail Gas Detector">Retail Gas Detector</option>
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>
      <Field label="How can we help?" error={errors.message?.message} htmlFor="f-message" className="mt-4">
        <Textarea
          id="f-message"
          rows={5}
          placeholder="Site location, scope, dates, quantities…"
          {...register("message")}
        />
      </Field>
      <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          By submitting you agree to be contacted about your enquiry.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary-hover"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send enquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
