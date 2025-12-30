"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const PersonalInfoForm = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-slate-900">
        Personal Information
      </h3>

      {/* Full Name  */}
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" placeholder="Juan Dela Cruz" />
      </div>

      {/* Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="juan@gmail.com" />
        </div>

        {/* Phone Number*/}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+63 912 345 6789" />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Makati City, Philippines" />
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="summary"
          placeholder="I am a passionate developer..."
        />
      </div>
    </div>
  );
};
