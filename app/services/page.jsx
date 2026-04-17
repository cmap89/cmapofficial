'use client';

import PageSection from "../components/Utils/PageSection";
import FormCard from "../components/FormCard";

export default function BookPage() {
  return (
    <PageSection>
      <FormCard
        scriptSrc={"https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9QenBKViIsIldlYnNpdGVJRCI6Indic19WMDRKeCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnZzdESm4ifQ=="}
        title={"Contact Me Now!"}
        description={"This form will change your life."}
      />
    </PageSection>
  );
}