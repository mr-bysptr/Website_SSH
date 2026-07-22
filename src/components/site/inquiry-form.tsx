import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { buildEmailUrl, buildWhatsAppUrl, services, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

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
  const { t } = useLanguage();
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

    toast.success(t("Membuka WhatsApp dengan detail permintaan Anda — tekan kirim untuk menyampaikannya.", "Opening WhatsApp with your enquiry — press send to deliver it."));
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
        <Field label={t("Nama Lengkap", "Full name")} error={errors.name?.message} htmlFor="f-name">
          <Input id="f-name" autoComplete="name" {...register("name")} />
        </Field>
        <Field label={t("Nama Perusahaan", "Company")} error={errors.company?.message} htmlFor="f-company">
          <Input id="f-company" autoComplete="organization" {...register("company")} />
        </Field>
        <Field label={t("Jabatan", "Role")} error={errors.role?.message} htmlFor="f-role">
          <Input id="f-role" placeholder={t("misal: HSE Manager", "e.g. HSE Manager")} {...register("role")} />
        </Field>
        <Field label={t("Email Kerja", "Work email")} error={errors.email?.message} htmlFor="f-email">
          <Input id="f-email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label={t("No. HP / WhatsApp", "Phone / WhatsApp")} error={errors.phone?.message} htmlFor="f-phone">
          <Input id="f-phone" type="tel" autoComplete="tel" placeholder="+62 …" {...register("phone")} />
        </Field>
        <Field label={t("Layanan yang Dibutuhkan", "Service of interest")} error={errors.service?.message} htmlFor="f-service">
          <select
            id="f-service"
            {...register("service")}
            className="flex h-10 w-full items-center rounded-md border border-input bg-surface px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">{t("Pilih layanan…", "Select a service…")}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Rental Gas Detector">{t("Sewa Detektor Gas", "Rental Gas Detector")}</option>
            <option value="Retail Gas Detector">{t("Jual Detektor Gas", "Retail Gas Detector")}</option>
            <option value="Other">{t("Lainnya", "Other")}</option>
          </select>
        </Field>
      </div>
      <Field label={t("Bagaimana kami dapat membantu Anda?", "How can we help?")} error={errors.message?.message} htmlFor="f-message" className="mt-4">
        <Textarea
          id="f-message"
          rows={5}
          placeholder={t("Lokasi situs, ruang lingkup, tanggal, jumlah…", "Site location, scope, dates, quantities…")}
          {...register("message")}
        />
      </Field>
      <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          {t("Dengan mengirimkan formulir ini, Anda menyetujui untuk dihubungi terkait permintaan Anda.", "By submitting you agree to be contacted about your enquiry.")}
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 gap-2 bg-primary px-6 text-primary-foreground hover:bg-primary-hover"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {t("Kirim Permintaan", "Send enquiry")}
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
