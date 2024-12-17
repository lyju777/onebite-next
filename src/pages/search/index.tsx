import React from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <div>search{q}</div>;
}
