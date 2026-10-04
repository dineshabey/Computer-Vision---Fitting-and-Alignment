import { SectionTitle } from "@/components/ui/section-title";

type SectionHeaderProps = Parameters<typeof SectionTitle>[0];

export function SectionHeader(props: SectionHeaderProps) {
  return <SectionTitle {...props} />;
}
