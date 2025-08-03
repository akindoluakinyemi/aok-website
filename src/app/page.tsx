export const metadata = {
  title: "AOK Smart Living Website",
  description:
    "Official website of AOK Limited – revolutionizing Nigerian homes with smart control, monitoring, and automation.",
};

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 font-outfit">
      {/* Hero Section */}
      <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-left px-6 md:px-20 bg-gradient-to-br from-white via-gray-100 to-gray-300 relative overflow-hidden">
        <div className="w-full flex items-center justify-center md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/aok-logo.png"
            alt="AOK Limited Logo"
            width={340}
            height={340}
            className="mb-6 h-auto "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold mb-4">
            AOK Smart Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Revolutionizing Nigerian homes with smart control, monitoring, and
            automation
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-xl text-white"
            >
              Go to Web App
            </a>
            <a
              href="https://tally.so/r/wo8465"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-6 py-3 rounded-xl"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10 md:px-20 text-center bg-gradient-to-b from-gray-300 to-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-justify text-gray-800">
          <p>
            AOK Smart Living is a Nigerian smart home company transforming how people interact with their living spaces. Our mission is to make intelligent, connected living a reality for everyone, offering solutions that bring automation, control, and convenience to modern homes.
          </p>
          <p>
            At the core of every AOK system is seamless energy management, enabling users to monitor and control electricity usage, manage appliances remotely, and optimize power consumption, all through a simple, intuitive app. In a country where power supply is unpredictable and energy costs are rising, this capability is not just useful — it is essential.
          </p>
          <p>
            However, AOK Smart Living is much more than energy control. From smart lighting and appliance automation to security integrations and customizable home scenes, we provide a full ecosystem of smart home features designed to adapt to your lifestyle. Whether you are living in a studio apartment or managing a multi-room household, our flexible product tiers ensure that there is a smart solution for every need and budget.
          </p>
          <p>
            We are not just making homes smarter, we are redefining what it means to live comfortably, efficiently, and securely in Nigeria. One home at a time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-b from-white to-gray-300">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What We Offer
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-lg list-disc list-inside">
          <li>Control and monitor your appliances based on your needs</li>
          <li>Energy usage tracking per device/room</li>
          <li>Schedule devices to turn on/off</li>
          <li>Know when power is available or out</li>
          <li>Full smart integration with security cameras and automation</li>
        </ul>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-b from-gray-300 to-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Tiers</h2>

        {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div> */}

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto md:flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-white p-5 rounded-2xl shadow-md flex-1 md:basis-1/3 md:min-w-[250px] md:max-w-[400px] lg:max-w-full">
            <Image
              src="/tier2.jpg"
              alt="Tier 1"
              width={500}
              height={300}
              className="rounded-xl mb-4 w-full object-cover h-[200px]"
            />
            <h3 className="text-2xl font-semibold mb-2">Basic Smart Living</h3>
            <ul className="list-disc list-inside text-[15px] text-gray-600">
              <li>Room-to-room tracking</li>
              <li>Total energy usage monitoring</li>
              <li>Remote control of appliances</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-md flex-1 md:basis-1/3 md:min-w-[250px] md:max-w-[400px] lg:max-w-full">
            <Image
              src="/tier1.jpg"
              alt="Tier 2"
              width={500}
              height={300}
              className="rounded-xl mb-4 w-full object-cover h-[200px]"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Enhanced Smart Living
            </h3>
            <ul className="list-disc list-inside text-[15px] text-gray-600">
              <li>Room-to-room tracking</li>
              <li>Total energy usage monitoring</li>
              <li>Remote control of appliances</li>
              <li>Device-specific energy</li>
              <li>Smart scheduling for devices</li>
              <li>Multiple user access</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-md flex-1 md:basis-1/3 md:min-w-[250px] md:max-w-[400px] lg:max-w-full">
            <Image
              src="/tier3.jpg"
              alt="Tier 3"
              width={500}
              height={300}
              className="rounded-xl mb-4 w-full object-cover h-[200px]"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Complete Smart Experience
            </h3>
            <ul className="list-disc list-inside text-[15px] text-gray-600">
              <li>Room-to-room tracking</li>
              <li>Total energy usage monitoring</li>
              <li>Remote control of appliances</li>
              <li>Device-specific energy</li>
              <li>Smart scheduling for devices</li>
              <li>Multiple user access</li>
              <li>Voice command integration</li>
              <li>Security camera integration</li>
              <li>Weather-based control and monitoring</li>
              <li>Energy consumprion goal tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-10 text-center bg-gradient-to-b from-white to-gray-300">
        <h2 className="text-3xl font-semibold mb-6">Ready to get started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          We are gearing up to launch full-scale home installations very soon!!
        </p>{" "}
        <p className="text-lg max-w-2xl mx-auto mb-6 text-justify md:text-center">
          {" "}
          If you are excited to transform your living space into a smart,
          energy-efficient home, join our waitlist now. You will be the first to
          know when we begin installations and receive early access to our
          exclusive services.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-xl text-white"
          >
            Go to Web App
          </a>
          <a
            href="https://tally.so/r/wo8465"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-400 text-gray-900 hover:bg-gray-500 px-6 py-3 rounded-xl"
          >
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 px-6 md:px-20 bg-gradient-to-b from-gray-300 to-white text-center">
        <p className="mb-4">
          Contact us at{" "}
          <a href="mailto:aoksmartliving@gmail.com" className="underline">
            aoksmartliving@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-4 text-xl">
          <a
            href="https://www.instagram.com/aoksmartliving?igsh=Z255bm80c2duenh5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Instagram
          </a>

          <a
            href="https://x.com/aoksmartliving?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Twitter/X
          </a>
          <a href="#" className="hover:text-black">
            Facebook
          </a>
        </div>
      </footer>
    </main>
  );
}
