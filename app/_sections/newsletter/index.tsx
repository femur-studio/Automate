import NextForm from "next/form"
import { Section } from "../../../common/section-wrapper"
import { Input } from "../../../common/input"

export interface NewsletterFragment {
  title: string
  description: string
  submissions: {
    ingestKey: string
    schema: Array<{
      id: string
      name: string
      type: string
      label: string
      required: boolean
    }>
  }
}

export function Newsletter({ newsletter }: { newsletter: NewsletterFragment }) {
  const emailInput = newsletter.submissions.schema.find((field) => field.type === "email")

  return (
    <Section className="bg-[--surface-secondary] !py-10 dark:bg-[--dark-surface-secondary]" container="full">
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">{newsletter.title}</h5>
          <p className="text text-[--text-tertiary] dark:text-[--dark-text-tertiary] lg:text-lg">
            {newsletter.description}
          </p>
        </div>

        <NextForm
          action={async (data) => {
            "use server"
            const email = data.get("email")
            console.log("Newsletter signup:", email)
            // In a real app, you would save this to your database
          }}
        >
          <Input {...emailInput} />
        </NextForm>
      </div>
    </Section>
  )
}
