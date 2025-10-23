"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFeedback({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFeedback({ type: "error", message: "Failed to send message. Try again later." });
      }
    } catch {
      setFeedback({ type: "error", message: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-background text-foreground">
      <div className="max-w-screen-sm mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Get in Touch
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Send Me a Message</h2>
        <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">Got a question or project idea? Let’s connect!</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required autoComplete="name" className="bg-muted border border-accent/30 focus:border-primary/50 transition-all" />

          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required autoComplete="email" className="bg-muted border border-accent/30 focus:border-primary/50 transition-all" />

          <Textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
            className="bg-muted border border-accent/30 focus:border-primary/50 transition-all min-h-[150px]"
          />

          <Button type="submit" disabled={loading} className="w-full rounded-full font-semibold flex items-center justify-center gap-2">
            {loading ? (
              <>
                <motion.div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          {feedback && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-3 font-medium ${feedback.type === "success" ? "text-green-500" : "text-red-500"}`}>
              {feedback.message}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Email;
