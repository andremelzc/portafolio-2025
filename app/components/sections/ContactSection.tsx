import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Button from "@/app/components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contacto">
      <div className="flex flex-col gap-16 text-center items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-6xl">Contacto</h1>
            <h2 className="text-xl">Escríbeme si quieres trabajar conmigo</h2>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <Button
              variant="primary"
              icon={<BsLinkedin size={40} />}
              iconPosition="top"
              rounded="full"
            >
              Linkedin
            </Button>
            <Button
              variant="primary"
              icon={<BsGithub size={40} />}
              iconPosition="top"
              rounded="full"
            >
              Github
            </Button>
            <Button
              variant="primary"
              icon={<FiMail size={40} />}
              iconPosition="top"
              rounded="full"
            >
              andre050719mc@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
