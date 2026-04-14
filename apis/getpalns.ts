export default async function getAllPlans() {
  const respons = await fetch("https://api.helperlawyer.online/subscription/plans/public")
  const data = await respons.json()
  return data.plans
}