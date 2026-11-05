import Link from "next/link";
import { MapPin, Clock, Train, Car, Accessibility } from "lucide-react";

export const metadata = {
  title: "Venue & Location | World Mosaic",
  description: "Yashobhoomi, Dwarka, New Delhi – venue details and map for World Mosaic 2027.",
};

export default function VenuePage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Venue & Location
          </h1>
          <p className="mt-3 text-white/80">
            Yashobhoomi · India International Convention and Expo Centre
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* Address card */}
          <div className="card-mosaic p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                      Yashobhoomi
                    </h2>
                    <p className="text-[var(--color-deep)]/70 text-sm mt-1">
                      India International Convention and Expo Centre<br />
                      Sector 25, Dwarka, New Delhi, Delhi 110077
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[var(--color-deep)]">Event timings</p>
                    <p className="text-sm text-[var(--color-deep)]/70">
                      23–24 January 2027 · 10:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[var(--color-deep)]">By Metro</p>
                    <p className="text-sm text-[var(--color-deep)]/70">
                      Nearest stations: Dwarka Sector 21 / Dwarka Sector 25 (Airport Express & Blue Line connectivity). Check DMRC for the latest routes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[var(--color-deep)]">By Road</p>
                    <p className="text-sm text-[var(--color-deep)]/70">
                      Accessible via Dwarka Expressway and major arterial roads. Parking arrangements will be announced closer to the event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Accessibility className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[var(--color-deep)]">Accessibility</p>
                    <p className="text-sm text-[var(--color-deep)]/70">
                      The venue has accessibility provisions. Please mention any assistance needs during registration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-deep)] mb-4 text-center">
              Location Map
            </h2>
            <div className="card-mosaic overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="Yashobhoomi, Dwarka, New Delhi – Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.218!2d77.045!3d28.555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b86c10b12cf%3A0xa6d41303342b088c!2sYashobhoomi!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[320px]"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-[var(--color-deep)]/50">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Yashobhoomi+India+International+Convention+and+Expo+Centre+Dwarka+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--color-secondary)]"
              >
                Open in Google Maps
              </a>
              {" · "}Map is indicative; final entry gates and parking will be shared before the event.
            </p>
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-sm text-[var(--color-deep)]/60 max-w-2xl mx-auto">
              Venue booking, hall allocation, capacity and permissions remain subject to confirmation
              with Yashobhoomi management. This page is part of the student project prototype.
            </p>
            <Link href="/registration" className="btn-primary mt-6 inline-flex">
              Register for the Festival
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
