import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import BlogDetail from "./pages/BlogDetail";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLoginPage from "./pages/AdminLogin";
import AdminHomePage from "./pages/admin/AdminHome";
import BlogsPage from "./pages/admin/Blogs";
import DraftsPage from "./pages/admin/Drafts";
import NewBlogPage from "./pages/admin/NewBlog";
import EditDraftPage from "./pages/admin/EditDraft";
import NotFound from "./pages/NotFound";

// Imagination Admin Versions
import AdminV1Home from "./pages/admin-v1/Home";
import AdminV2Home from "./pages/admin-v2/Home";
import AdminV3Home from "./pages/admin-v3/Home";
import AdminShowcase from "./pages/AdminShowcase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/:slug" element={<AppLayout><BlogDetail /></AppLayout>} />
          <Route path="/search" element={<AppLayout><Search /></AppLayout>} />
          <Route path="/about" element={<AppLayout><About /></AppLayout>} />
          <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />
          <Route path="/category/:category" element={<AppLayout><Index /></AppLayout>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/blogs" element={<BlogsPage />} />
          <Route path="/admin/drafts" element={<DraftsPage />} />
          <Route path="/admin/blogs/new" element={<NewBlogPage />} />
          <Route path="/admin/drafts/:id" element={<EditDraftPage />} />
          
          {/* Admin Concept Showcase */}
          <Route path="/admin-showcase" element={<AdminShowcase />} />
          
          {/* Imagination Admin V1 - Command Center */}
          <Route path="/admin-v1/home" element={<AdminV1Home />} />
          <Route path="/admin-v1/*" element={<AdminV1Home />} />
          
          {/* Imagination Admin V2 - Zen Workspace */}
          <Route path="/admin-v2/home" element={<AdminV2Home />} />
          <Route path="/admin-v2/*" element={<AdminV2Home />} />
          
          {/* Imagination Admin V3 - Editorial Studio */}
          <Route path="/admin-v3/home" element={<AdminV3Home />} />
          <Route path="/admin-v3/*" element={<AdminV3Home />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
