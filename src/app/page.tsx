import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "#/logo.svg";
import cone from "#/cone.png";
import { Section } from "@/components/section";
import {
  address,
  displayInstagramUser,
  displayPhone,
  instaUrl,
  wppUrl,
} from "@/lib/constants";

export default function LandingPage() {
  const products = [
    {
      title: "Cone Trufado",
      id: 1,
      image: cone,
      flavors: [
        {
          title: "Ninho com Oreo",
          description:
            "Experimente a irresistível combinação de Leite Ninho com pedaços crocantes de Oreo. Nosso cone trufado é recheado com a cremosidade do Ninho e o toque único do biscoito Oreo, garantindo uma explosão de sabor a cada mordida.",
        },
        {
          title: "Ninho com Nutella",
          description:
            "Se você é fã de Nutella, vai adorar nosso cone trufado recheado com Leite Ninho e Nutella. A suavidade do Ninho se mistura perfeitamente com o sabor intenso da Nutella, criando um doce que vai encantar seu paladar.",
        },
        {
          title: "Ferrero Rocher",
          description:
            "Para os amantes de Ferrero Rocher, este cone trufado é um verdadeiro presente! Recheado com o sabor característico do famoso bombom, ele traz a combinação perfeita de chocolate, avelã e crocância.",
        },
        {
          title: "Prestígio",
          description:
            "Nossa versão Prestígio traz a delícia do coco fresco combinado com uma trufa cremosa de chocolate. Uma homenagem ao clássico sabor Prestígio, que vai te transportar para momentos de pura nostalgia.",
        },
        {
          title: "Brigadeiro",
          description:
            "O clássico brigadeiro agora em formato de cone trufado! Recheado com a tradicional trufa de brigadeiro, é a escolha perfeita para quem ama chocolate e quer saborear um doce genuinamente brasileiro.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-pink-100 to-purple-100 text-center gap-y-6 flex flex-col text-accent items-center py-4">
        <div className="flex flex-row justify-center items-center gap-x-3">
          <Image
            src={logo}
            alt="Confeitaria Diana Logo"
            width={38}
            className="h-auto"
          />
          <h1 className="text-2xl font-serif -mb-3 font-bold">
            Confeitaria Diana
          </h1>
        </div>
        <p className="text-base font-bold text-balance">
          Doces artesanais de alta qualidade em Lençóis Paulistas, SP
        </p>
        <a href={wppUrl} target="_blank" className="font-sans font-bold">
          <Button size="lg">Pedir agora</Button>
        </a>
      </header>

      <main className="flex-grow">
        <Section heading="Quem somos">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/hero.jpeg"
                alt="Confeitaria Diana"
                width={1024}
                height={1024}
                className="sm:rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-base mb-4">
                A Confeitaria Diana é uma confeitaria inovadora em Lençóis
                Paulistas, SP, especializada em doces artesanais de alta
                qualidade. Nossa paixão pela confeitaria nos leva a criar
                verdadeiras obras de arte comestíveis.
              </p>
              <p className="text-base">
                Com ingredientes selecionados e técnicas apuradas, oferecemos
                uma experiência única em cada mordida. Faça seu pedido e se
                deliciar com nossas criações!
              </p>
            </div>
          </div>
        </Section>

        {products.map((product) => (
          <Section heading={product.title} key={product.id}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={422}
                  height={422}
                  className="bg-gradient-to-b from-primary to-accent rounded-lg p-2"
                />
              </div>
              <dl className="md:w-1/2 text-left space-y-6">
                {product.flavors.map((flavor) => (
                  <div key={flavor.title + flavor.description + product.id}>
                    <dt className="text-xl font-bold font-serif mb-2 text-accent">
                      {flavor.title}
                    </dt>
                    <dd className="text-sm caption-top pl-2 border-l-4 border-primary">
                      {flavor.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <a href={wppUrl} target="_blank" className="font-sans font-bold ">
                <Button size="lg" className="animate-bounce">
                  Quero um {product.title}!
                </Button>
              </a>
            </div>
          </Section>
        ))}

        <Section heading="Entre em contato">
          <a
            href="https://maps.app.goo.gl/WjZhUcAua88uEKYG9"
            target="_blank"
            className="flex items-center mb-4 font-sans font-bold underline text-pink-500 hover:text-pink-600"
          >
            <MapPin size={24} className="mr-2 shrink-0" />
            <p className='text-balance"'>{address}</p>
          </a>
          <a
            href={wppUrl}
            target="_blank"
            className="flex items-center mb-4 font-sans font-bold underline text-pink-500 hover:text-pink-600"
          >
            <Phone size={24} className="mr-2 shrink-0" />
            <p className='text-balance"'>{displayPhone}</p>
          </a>
          <a
            href={instaUrl}
            target="_blank"
            className="flex items-center mb-4 font-sans font-bold underline text-pink-500 hover:text-pink-600"
          >
            <Instagram size={24} className="mr-2 shrink-0" />
            <p className='text-balance"'>{displayInstagramUser}</p>
          </a>
        </Section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Confeitaria Diana LP. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
