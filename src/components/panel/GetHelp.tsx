import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function GetHelp() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your help request has been submitted. We'll get back to you soon!");
  };

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Get Help</h1>
        <p className="text-muted-foreground">
          We're here to help you with any questions or issues you might have
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Reach out to our support team through these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="mailto:support@nexusadmin.com"
                  className="text-primary hover:underline"
                >
                  support@nexusadmin.com
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Available Monday - Friday, 9AM - 6PM
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Phone Support</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-HELP</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Resources</CardTitle>
            <CardDescription>
              Helpful resources to get you started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive guides and tutorials
              </p>
              <Button variant="outline" size="sm">
                View Documentation
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">FAQ</h3>
              <p className="text-sm text-muted-foreground">
                Frequently asked questions
              </p>
              <Button variant="outline" size="sm">
                Browse FAQ
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Community Forum</h3>
              <p className="text-sm text-muted-foreground">
                Connect with other users
              </p>
              <Button variant="outline" size="sm">
                Visit Forum
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as
            possible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please describe your issue or question in detail..."
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <select
                id="urgency"
                className="w-full p-2 border rounded-md"
                defaultValue="normal"
              >
                <option value="low">Low - Whenever you have time</option>
                <option value="normal">Normal - Within 24 hours</option>
                <option value="high">High - As soon as possible</option>
                <option value="critical">Critical - System down</option>
              </select>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Emergency Support */}
      <Card className="mt-6 border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Emergency Support</CardTitle>
          <CardDescription>
            For critical issues that require immediate attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              If you're experiencing a system outage or critical issue that
              affects your business operations, please call our emergency
              hotline:
            </p>
            <p className="text-lg font-semibold text-destructive">
              +1 (555) EMERGENCY
            </p>
            <p className="text-xs text-muted-foreground">
              Available 24/7 for critical issues only
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
