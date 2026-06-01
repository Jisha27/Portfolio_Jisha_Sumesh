import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = ({ data }) => {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(data?.email);
    toast.success("Email copied!");
  };

  return (
    <section id="contact" className="bg-[var(--background)] px-6 py-16">
      <div className="max-w-[90%] mx-auto border border-[var(--card-border)] rounded-2xl p-8 bg-[var(--surface)] text-center">
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Let&apos;s Connect
        </h2>

        <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto leading-7">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities.
        </p>

        <div className="flex justify-center gap-5 mt-8">
          <a
            href={data?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition"
          >
            <FaGithub />
          </a>

          <a
            href={data?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition"
          >
            <FaLinkedin />
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="size-12 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition"
          >
            <FaEnvelope />
          </button>
        </div>
      </div>

      <p className="text-center text-[var(--text-muted)] mt-8">
        © 2025 Jisha. All rights reserved.{" "}
        <span className="text-[var(--primary)]">💜</span>
      </p>
    </section>
  );
};

export default Contact;