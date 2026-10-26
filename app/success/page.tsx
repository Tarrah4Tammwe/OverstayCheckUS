import { redirect } from 'next/navigation'

// Legacy URL. The calculator now shows results in place.
export default function SuccessPage() {
  redirect('/')
}
