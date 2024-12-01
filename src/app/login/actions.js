"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";

export async function login(formData) {
  const supabase = createClient();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    redirect("/error");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: email.toString(),
    password: password.toString(),
  });

  if (error) {
    console.error("Login error:", error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = createClient();
  const email = formData.get("email");
  const password = formData.get("password");

  const { error } = await supabase.auth.signUp({
    email: email.toString(),
    password: password.toString(),
  });

  if (error) {
    console.error("Signup error:", error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
