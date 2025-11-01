import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
  const [open, setOpen] = useState(false);

  const date = value ? new Date(value) : undefined;
  const time = value
    ? value.toLocaleTimeString("en-GB", { hour12: false })
    : "12:00:00";

  return (
    <div className="flex gap-3">
      {/* Date Picker */}
      <div className="flex flex-col gap-2 flex-1">
        <Label htmlFor="date-picker">Schedule Date</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className={cn(
                "justify-start font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date
                ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
                    date.getDate()
                  ).padStart(2, "0")}`
                : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                if (!d) return;
                const newDateTime = new Date(d);
                const [h, m, s] = time.split(":");
                newDateTime.setHours(+h, +m, +s);
                onChange?.(newDateTime);
                setOpen(false);
              }}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-2 flex-1">
        <Label htmlFor="time-picker">Schedule Time</Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          value={time}
          onChange={(e) => {
            const [h, m, s] = e.target.value.split(":");
            const newDateTime = date ? new Date(date) : new Date();
            newDateTime.setHours(+h, +m, +s);
            onChange?.(newDateTime);
          }}
          className="bg-background"
        />
      </div>
    </div>
  );
}
