import { User, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthorBannerProps {
  name: string;
  bio: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

export function AuthorBanner({ name, bio, profileImage, socialLinks }: AuthorBannerProps) {
  return (
    <div className="border border-border rounded-lg p-6 bg-muted/30">
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="shrink-0">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
          )}
        </div>

        {/* Name and Bio */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{bio}</p>

          {/* Social Links */}
          {socialLinks && (
            <div className="flex gap-2">
              {socialLinks.linkedin && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
