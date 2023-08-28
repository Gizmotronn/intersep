import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React, { useState } from "react";
import CoreLayout from "../components/Core/Layout";

export default function Home() {
    const session = useSession();
    const supabase = useSupabaseClient();

    return (
            <CoreLayout>
              <p>fuck you</p>
            </CoreLayout>
    )
}