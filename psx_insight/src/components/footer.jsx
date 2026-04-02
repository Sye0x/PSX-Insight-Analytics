function Footer() {
  return (
    <footer className="w-full px-6 pt-20 pb-10 bg-background border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-bold text-buttonbg mb-4">
              PSX Insight
            </a>
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              Learn investing through simulation, insights, and real-world
              strategy testing without risking real money.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70 font-medium">
              <li className="hover:text-buttonbg cursor-pointer">Features</li>
              <li className="hover:text-buttonbg cursor-pointer">Pricing</li>
              <li className="hover:text-buttonbg cursor-pointer">
                How it Works
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70 font-medium">
              <li className="hover:text-buttonbg cursor-pointer">About</li>
              <li className="hover:text-buttonbg cursor-pointer">Careers</li>
              <li className="hover:text-buttonbg cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-foreground/60 mb-4 font-medium">
              Get investing tips and updates straight to your inbox.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-xl bg-background/60 border border-white/10 text-sm focus:outline-none focus:border-buttonbg"
              />
              <button className="bg-buttonbg px-4 py-2 rounded-xl text-white text-sm font-semibold hover:bg-buttonbg/90 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50 font-medium">
            © {new Date().getFullYear()} InvestLab. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground/60 font-medium">
            <span className="hover:text-buttonbg cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-buttonbg cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-buttonbg cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
