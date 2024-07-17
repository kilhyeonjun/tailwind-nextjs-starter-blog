import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

const handler = siteMetadata.newsletter
  ? NewsletterAPI({
      provider: siteMetadata.newsletter.provider,
    })
  : null

export { handler as GET, handler as POST }
