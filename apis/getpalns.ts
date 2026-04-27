export default async function getAllPlans() {
  const response = await fetch(
    "https://api.helperlawyer.online/subscription/plans/public",
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch plans");
  }

  const data = await response.json();
  return data.plans;
}