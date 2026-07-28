"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  date?: string;
  href: string;
  tags?: readonly string[];
}

export function BlogCard({ title, description, date, href, tags }: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Let the "open post" arrow navigate without also toggling the description
    e.stopPropagation();
  };

  return (
    <li
      className="relative ml-10 py-4 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-1 flex-col justify-start gap-1">
        {date && (
          <time className="text-xs text-muted-foreground">{date}</time>
        )}
        <h2 className="font-semibold leading-none flex items-center gap-1">
          {title}
          <ChevronRightIcon
            className={cn(
              "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
              isExpanded ? "rotate-90" : "rotate-0"
            )}
          />
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="ml-auto inline-flex opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Read "${title}" on the original site`}
          >
            <Globe className="size-3.5" />
          </Link>
        </h2>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="prose dark:prose-invert text-sm text-muted-foreground overflow-hidden"
          >
            {description}
          </motion.div>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-1 flex flex-row flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}