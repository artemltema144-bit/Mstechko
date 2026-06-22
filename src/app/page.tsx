"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");
    if (hasShownSplash) {
      setLoading(false);
    }
  }, []);

  const handleFinishLoading = () => {
    setLoading(false);
    sessionStorage.setItem("hasShownSplash", "true");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen finishLoading={handleFinishLoading} />}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MESTECHKO Logo"
                width={50}
                height={50}
                className="rounded-lg shadow-lg shadow-cyan-500/20"
              />
              <span className="font-bold text-xl tracking-tighter uppercase hidden sm:block">
                MESTECHKO <span className="text-cyan-400">online</span>
              </span>
            </div>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">Об игре</a>
              <a href="#servers" className="hover:text-cyan-400 transition-colors">Серверы</a>
              <a href="#media" className="hover:text-cyan-400 transition-colors">Медиа</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950 z-10" />
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
              <Image
                src="/logo.png"
                alt="MESTECHKO Large Logo"
                width={250}
                height={250}
                className="mx-auto mb-8 drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]"
              />
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 uppercase">
                Местечко <span className="text-cyan-400">Online</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
                Твой новый кубический мир. Строй, развивайся и живи в ритме большого города.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Скоро открытие
                </button>
                <a href="#about" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full transition-all border border-slate-700">
                  Узнать больше
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-tight">О проекте</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-4xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold mb-4">Свобода творчества</h3>
                  <p className="text-slate-400">
                    Уникальная кубическая графика позволяет воплотить любые идеи. Строй дома, магазины или целые районы.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-4xl mb-4">🏙️</div>
                  <h3 className="text-xl font-bold mb-4">Атмосфера CRMP</h3>
                  <p className="text-slate-400">
                    Вдохновлено легендарным сервером &quot;Городок&quot;. Мы переносим этот дух в новый формат.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400 text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-4">Живое комьюнити</h3>
                  <p className="text-slate-400">
                    Местечко — это не просто игра, это люди. Находи друзей, создавай фракции и развивай свой Ирновия-сити.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Servers Section */}
          <section id="servers" className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-tight">Наши серверы</h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full mb-4 uppercase">Server 01</span>
                    <h3 className="text-2xl font-extrabold mb-4 uppercase">Classic Town (Городок)</h3>
                    <p className="text-slate-400 mb-6">
                      Классическая карта любимого сервера. Полная свобода строительства, экономика и уютная атмосфера.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">✅ Карта &quot;Городок&quot;</li>
                      <li className="flex items-center gap-2">✅ Система строительства</li>
                      <li className="flex items-center gap-2">✅ Уникальные ресурсы</li>
                    </ul>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800">
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full mb-4 uppercase">Server 02</span>
                    <h3 className="text-2xl font-extrabold mb-4 uppercase">CRMP Experience</h3>
                    <p className="text-slate-400 mb-6">
                      Экшен и РП на базе всеми любимого КРМП. Фракции, машины, работы и бесконечный движ.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">✅ ГТА/КРМП стиль</li>
                      <li className="flex items-center gap-2">✅ Системы фракций</li>
                      <li className="flex items-center gap-2">✅ Реалистичный город</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Media Section */}
          <section id="media" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Галерея</h2>
              <p className="text-slate-400 mb-12">Игра находится в разработке. Скоро здесь появятся первые скриншоты!</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center animate-pulse overflow-hidden group">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors" />
                    <span className="text-slate-600 font-bold group-hover:text-slate-500 transition-colors">Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/logo.png"
              alt="MESTECHKO Logo"
              width={60}
              height={60}
              className="mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-slate-500 text-sm mb-6">
              © 2024 MESTECHKO online. Все права защищены. <br />
              Разработка ведется на базе карты Городок и Ирновия.
            </p>
            <div className="flex justify-center gap-8 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">VKontakte</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
