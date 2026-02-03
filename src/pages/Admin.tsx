import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { 
  Settings, Users, DollarSign, MessageSquare, Image, 
  ArrowLeft, Save, Plus, Trash2, Star 
} from "lucide-react";
import { Link } from "react-router-dom";

interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  quote: string | null;
  image_url: string | null;
  sort_order: number;
  is_active: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  is_popular: boolean;
  sort_order: number;
  is_active: boolean;
}

interface Testimonial {
  id: string;
  client_name: string;
  membership_type: string | null;
  quote: string;
  rating: number;
  is_active: boolean;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

const Admin = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    await Promise.all([
      fetchTrainers(),
      fetchPricingPlans(),
      fetchTestimonials(),
      fetchSubmissions(),
      fetchSettings(),
    ]);
    setLoading(false);
  };

  const fetchTrainers = async () => {
    const { data } = await supabase
      .from("trainers")
      .select("*")
      .order("sort_order");
    if (data) setTrainers(data);
  };

  const fetchPricingPlans = async () => {
    const { data } = await supabase
      .from("pricing_plans")
      .select("*")
      .order("sort_order");
    if (data) setPricingPlans(data.map(p => ({ ...p, features: p.features as string[] })));
  };

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setTestimonials(data);
  };

  const fetchSubmissions = async () => {
    const { data } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setSubmissions(data);
  };

  const fetchSettings = async () => {
    const { data } = await supabase.from("site_settings").select("*");
    if (data) {
      const settingsObj: Record<string, string> = {};
      data.forEach((s) => {
        settingsObj[s.key] = typeof s.value === "string" ? s.value : JSON.stringify(s.value);
      });
      setSettings(settingsObj);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    const { error } = await supabase
      .from("site_settings")
      .update({ value: JSON.parse(value) })
      .eq("key", key);
    if (!error) {
      toast({ title: "Setting updated!" });
      fetchSettings();
    }
  };

  const updateTrainer = async (trainer: Trainer) => {
    const { error } = await supabase
      .from("trainers")
      .update(trainer)
      .eq("id", trainer.id);
    if (!error) {
      toast({ title: "Trainer updated!" });
      fetchTrainers();
    }
  };

  const deleteTrainer = async (id: string) => {
    const { error } = await supabase.from("trainers").delete().eq("id", id);
    if (!error) {
      toast({ title: "Trainer deleted!" });
      fetchTrainers();
    }
  };

  const updatePlan = async (plan: PricingPlan) => {
    const { error } = await supabase
      .from("pricing_plans")
      .update({ ...plan, features: plan.features })
      .eq("id", plan.id);
    if (!error) {
      toast({ title: "Plan updated!" });
      fetchPricingPlans();
    }
  };

  const updateTestimonial = async (testimonial: Testimonial) => {
    const { error } = await supabase
      .from("testimonials")
      .update(testimonial)
      .eq("id", testimonial.id);
    if (!error) {
      toast({ title: "Testimonial updated!" });
      fetchTestimonials();
    }
  };

  const markSubmissionRead = async (id: string) => {
    await supabase
      .from("contact_submissions")
      .update({ is_read: true })
      .eq("id", id);
    fetchSubmissions();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-xl animate-pulse">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-display font-bold text-neon-gradient">
              Admin Panel
            </h1>
          </div>
          <div className="text-sm text-muted-foreground">
            {submissions.filter(s => !s.is_read).length} unread messages
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="settings" className="space-y-8">
          <TabsList className="grid grid-cols-5 gap-2 bg-card p-2 rounded-xl">
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" /> Settings
            </TabsTrigger>
            <TabsTrigger value="trainers" className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Trainers
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> Pricing
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Reviews
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Messages
              {submissions.filter(s => !s.is_read).length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {submissions.filter(s => !s.is_read).length}
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="glass-card p-6">
              <h2 className="text-xl font-display font-semibold mb-6">Site Settings</h2>
              <div className="grid gap-6">
                {Object.entries(settings).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium capitalize">
                      {key.replace(/_/g, " ")}
                    </label>
                    <div className="flex gap-2">
                      <Input
                        value={value.replace(/^"|"$/g, "")}
                        onChange={(e) =>
                          setSettings({ ...settings, [key]: `"${e.target.value}"` })
                        }
                        className="flex-1 bg-secondary border-border"
                      />
                      <Button
                        onClick={() => updateSetting(key, settings[key])}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Trainers Tab */}
          <TabsContent value="trainers">
            <div className="space-y-4">
              {trainers.map((trainer) => (
                <div key={trainer.id} className="glass-card p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <Input
                          value={trainer.name}
                          onChange={(e) =>
                            setTrainers(
                              trainers.map((t) =>
                                t.id === trainer.id ? { ...t, name: e.target.value } : t
                              )
                            )
                          }
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Specialty</label>
                        <Input
                          value={trainer.specialty}
                          onChange={(e) =>
                            setTrainers(
                              trainers.map((t) =>
                                t.id === trainer.id ? { ...t, specialty: e.target.value } : t
                              )
                            )
                          }
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Experience</label>
                        <Input
                          value={trainer.experience}
                          onChange={(e) =>
                            setTrainers(
                              trainers.map((t) =>
                                t.id === trainer.id ? { ...t, experience: e.target.value } : t
                              )
                            )
                          }
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Quote</label>
                        <Input
                          value={trainer.quote || ""}
                          onChange={(e) =>
                            setTrainers(
                              trainers.map((t) =>
                                t.id === trainer.id ? { ...t, quote: e.target.value } : t
                              )
                            )
                          }
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">Image URL</label>
                    <Input
                      value={trainer.image_url || ""}
                      onChange={(e) =>
                        setTrainers(
                          trainers.map((t) =>
                            t.id === trainer.id ? { ...t, image_url: e.target.value } : t
                          )
                        )
                      }
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={trainer.is_active}
                        onCheckedChange={(checked) =>
                          setTrainers(
                            trainers.map((t) =>
                              t.id === trainer.id ? { ...t, is_active: checked } : t
                            )
                          )
                        }
                      />
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteTrainer(trainer.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateTrainer(trainer)}
                        className="bg-primary text-primary-foreground"
                      >
                        <Save className="w-4 h-4 mr-1" /> Save
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <div className="space-y-4">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="glass-card p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium">Plan Name</label>
                      <Input
                        value={plan.name}
                        onChange={(e) =>
                          setPricingPlans(
                            pricingPlans.map((p) =>
                              p.id === plan.id ? { ...p, name: e.target.value } : p
                            )
                          )
                        }
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Price ($)</label>
                      <Input
                        type="number"
                        value={plan.price}
                        onChange={(e) =>
                          setPricingPlans(
                            pricingPlans.map((p) =>
                              p.id === plan.id ? { ...p, price: parseFloat(e.target.value) } : p
                            )
                          )
                        }
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Period</label>
                      <Input
                        value={plan.period}
                        onChange={(e) =>
                          setPricingPlans(
                            pricingPlans.map((p) =>
                              p.id === plan.id ? { ...p, period: e.target.value } : p
                            )
                          )
                        }
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">Features (one per line)</label>
                    <Textarea
                      value={plan.features.join("\n")}
                      onChange={(e) =>
                        setPricingPlans(
                          pricingPlans.map((p) =>
                            p.id === plan.id
                              ? { ...p, features: e.target.value.split("\n") }
                              : p
                          )
                        )
                      }
                      rows={5}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={plan.is_popular}
                          onCheckedChange={(checked) =>
                            setPricingPlans(
                              pricingPlans.map((p) =>
                                p.id === plan.id ? { ...p, is_popular: checked } : p
                              )
                            )
                          }
                        />
                        <span className="text-sm text-muted-foreground">Popular</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={plan.is_active}
                          onCheckedChange={(checked) =>
                            setPricingPlans(
                              pricingPlans.map((p) =>
                                p.id === plan.id ? { ...p, is_active: checked } : p
                              )
                            )
                          }
                        />
                        <span className="text-sm text-muted-foreground">Active</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => updatePlan(plan)}
                      className="bg-primary text-primary-foreground"
                    >
                      <Save className="w-4 h-4 mr-1" /> Save
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="glass-card p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Client Name</label>
                      <Input
                        value={testimonial.client_name}
                        onChange={(e) =>
                          setTestimonials(
                            testimonials.map((t) =>
                              t.id === testimonial.id
                                ? { ...t, client_name: e.target.value }
                                : t
                            )
                          )
                        }
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Membership Type</label>
                      <Input
                        value={testimonial.membership_type || ""}
                        onChange={(e) =>
                          setTestimonials(
                            testimonials.map((t) =>
                              t.id === testimonial.id
                                ? { ...t, membership_type: e.target.value }
                                : t
                            )
                          )
                        }
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">Quote</label>
                    <Textarea
                      value={testimonial.quote}
                      onChange={(e) =>
                        setTestimonials(
                          testimonials.map((t) =>
                            t.id === testimonial.id ? { ...t, quote: e.target.value } : t
                          )
                        )
                      }
                      rows={3}
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={testimonial.is_active}
                        onCheckedChange={(checked) =>
                          setTestimonials(
                            testimonials.map((t) =>
                              t.id === testimonial.id ? { ...t, is_active: checked } : t
                            )
                          )
                        }
                      />
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => updateTestimonial(testimonial)}
                      className="bg-primary text-primary-foreground"
                    >
                      <Save className="w-4 h-4 mr-1" /> Save
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <div className="space-y-4">
              {submissions.length === 0 ? (
                <div className="glass-card p-12 text-center text-muted-foreground">
                  No contact submissions yet.
                </div>
              ) : (
                submissions.map((sub) => (
                  <div
                    key={sub.id}
                    className={`glass-card p-6 ${!sub.is_read ? "border-l-4 border-l-primary" : ""}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{sub.name}</h3>
                        <p className="text-sm text-muted-foreground">{sub.email}</p>
                        {sub.phone && (
                          <p className="text-sm text-muted-foreground">{sub.phone}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {new Date(sub.created_at).toLocaleDateString()}
                        </p>
                        {!sub.is_read && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markSubmissionRead(sub.id)}
                            className="mt-2"
                          >
                            Mark as Read
                          </Button>
                        )}
                      </div>
                    </div>
                    {sub.message && (
                      <p className="mt-4 text-foreground bg-secondary/50 p-4 rounded-lg">
                        {sub.message}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
