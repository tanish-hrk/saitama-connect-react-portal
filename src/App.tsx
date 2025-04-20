
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientPortal from "./pages/PatientPortal";
import DoctorPortal from "./pages/DoctorPortal";
import PatientSymptoms from "./pages/PatientSymptoms";
import PatientReports from "./pages/PatientReports";
import PatientAppointments from "./pages/PatientAppointments";
import DoctorPatients from "./pages/DoctorPatients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/patient/symptoms" element={<PatientSymptoms />} />
          <Route path="/patient/reports" element={<PatientReports />} />
          <Route path="/patient/appointments" element={<PatientAppointments />} />
          <Route path="/doctor" element={<DoctorPortal />} />
          <Route path="/doctor/patients" element={<DoctorPatients />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
