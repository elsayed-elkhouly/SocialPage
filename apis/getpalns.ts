export default async function getAllPlans() {
  const respons = await fetch("https://api.helperlawyer.online/subscription/plans/public",
    { next: { revalidate: 60 } }
  )
  const data = await respons.json()
  return data.plans
}