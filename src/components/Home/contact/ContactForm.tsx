import React, { useRef, useState } from "react";

import { Input } from "./Input";
import { Label } from "./Label";
import { Textarea } from "@/components/Home/contact/Textarea";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function ContactForm() {
  // State to manage the form submission loading state
  const [loading, setLoading] = useState(false);

  // Ref to access and reset the form after submission
  const formRef = useRef<HTMLFormElement>(null);

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;

    // Retrieve and trim input values from the form
    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    )?.value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    )?.value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    )?.value.trim();

    // Capture the current date and time
    const time = new Date().toLocaleString();

    // Basic validation: ensure required fields are filled
    if (!name || !message) {
      toast.error("Name and message are required.");
      setLoading(false);
      return;
    }

    // Prepare email parameters for EmailJS
    const templateParams = {
      name,
      email,
      message,
      time,
    };

    try {
      // Send the email using EmailJS API
      const result = await emailjs.send(
        "service_hvqvrcg", // Your EmailJS service ID
        "template_tt8qve5", // Your EmailJS template ID
        templateParams,
        "p-4LfTKvX7LrJsdlL", // Your EmailJS user/public key
      );

      console.log(result.text); // Optional: useful for debugging
      toast.success("Message sent successfully!");

      // Reset form fields using the form ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    // Contact form container with padding, border, and responsive styling
    <div className="shadow-input mx-auto flex h-full w-full flex-col justify-between gap-5 rounded-lg border p-6">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold">Talk nerdy to me 👓</h2>
        <p className="text-muted-foreground mt-2 w-fit">
          Got an idea hotter than my overheated CPU? 🔥
          <br /> Let's talk!
        </p>
      </div>

      {/* Contact form */}
      <form className="mb-2" onSubmit={handleSubmit} ref={formRef}>
        {/* Name Field */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">
              Your Name <sup className="text-red-500">*</sup>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name (or your secret identity!)"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>

        {/* Email Field */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="Leave an email if you want to hear back!"
            type="email"
          />
        </LabelInputContainer>

        {/* Message Field */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">
            What's on Your Mind? <sup className="text-red-500">*</sup>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Type your message… or just say hi!"
            required
          />
        </LabelInputContainer>

        {/* Submit Button with loading indicator */}
        <button
          className={cn(
            "group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]",
            loading && "cursor-not-allowed opacity-70",
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            // Spinner shown while message is being sent
            <span className="flex items-center justify-center">
              <svg
                className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send message →"
          )}

          {/* Gradient hover underline effect */}
          <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
          <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </button>
      </form>
    </div>
  );
}

// Reusable wrapper for label-input pairs to enforce consistent spacing and layout
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
