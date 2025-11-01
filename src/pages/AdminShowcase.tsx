import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Newspaper } from "lucide-react";

export default function AdminShowcase() {
  const versions = [
    {
      id: 1,
      name: "Command Center",
      path: "/admin-v1/home",
      icon: Sparkles,
      color: "from-blue-600 to-purple-600",
      bgColor: "from-slate-950 to-slate-900",
      description: "Dark & Futuristic",
      features: [
        "Dark theme with neon gradients",
        "Floating command palette",
        "Gaming-inspired dashboard",
        "Real-time stats",
      ],
    },
    {
      id: 2,
      name: "Zen Workspace",
      path: "/admin-v2/home",
      icon: Palette,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-slate-50 to-white",
      description: "Minimalist & Elegant",
      features: [
        "Apple-inspired design",
        "Floating navigation pills",
        "Gesture-friendly interface",
        "Lots of white space",
      ],
    },
    {
      id: 3,
      name: "Editorial Studio",
      path: "/admin-v3/home",
      icon: Newspaper,
      color: "from-orange-600 to-red-600",
      bgColor: "from-white to-slate-100",
      description: "Magazine Layout",
      features: [
        "Content-first approach",
        "Grid/List toggle views",
        "Large image previews",
        "Publishing-style interface",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            3 Wild Admin Concepts
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore three completely different admin panel designs. Each with unique UX, keeping all your core features intact.
          </p>
        </div>

        {/* Version Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {versions.map((version) => (
            <Card
              key={version.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all hover:scale-105 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${version.color}`} />
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${version.color}`}>
                    <version.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{version.name}</CardTitle>
                    <p className="text-sm text-slate-400">{version.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {version.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${version.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={version.path}>
                  <Button className={`w-full gap-2 bg-gradient-to-r ${version.color} hover:opacity-90`}>
                    Explore This Design
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Your Original Admin */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Your Current Admin Panel</h3>
              <p className="text-slate-400 mb-6">
                Your original admin panel with sidebar navigation and all your current features intact.
              </p>
              <Link to="/admin/home">
                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:text-white">
                  Go to Original Admin
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            These are concept designs to explore different UI/UX approaches.
            <br />
            Let me know which style you prefer and we can implement it with full functionality!
          </p>
        </div>
      </div>
    </div>
  );
}
