import { verifySession } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { logout } from '@/app/actions/auth';

export default async function StaffPortalPage() {
  const session = await verifySession();

  if (!session) {
    redirect('/staff-login');
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Portal Header */}
      <header className="bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center">
              <img
                src="/logos/ArcoFit-logo-main white(ABC).png"
                alt="Arco Fit"
                className="h-8 w-auto"
              />
            </a>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#007CAF]">
              Staff Portal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 hidden sm:inline">
              Welcome, <span className="text-white/80 font-medium">{session.username}</span>
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/20 text-white/60 hover:border-red-500/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content — Calculator Placeholder */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white/60 tracking-wider text-center px-4">
          The Calculator Goes Here
        </h1>
      </main>

      {/* Portal Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            Staff Portal — Arco Fit Gym &amp; Wellness — For authorized personnel only
          </p>
          <a
            href="/"
            className="text-xs text-[#007CAF] hover:text-white transition-colors"
          >
            ← Back to Public Site
          </a>
        </div>
      </footer>
    </div>
  );
}
