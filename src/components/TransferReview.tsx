
import { useState } from "react";
import { ArrowLeft, User, Clock, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export const TransferReview = () => {
  const [recipientName, setRecipientName] = useState("Pepa Horak");
  const [iban, setIban] = useState("CZ80 6210 6701 0022 2821 2551");
  const [estimatedArrival, setEstimatedArrival] = useState("Tomorrow");
  const [recipientGets, setRecipientGets] = useState("30");
  const [yourTotal, setYourTotal] = useState("30");
  const [addToTrusted, setAddToTrusted] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-background">
        <ArrowLeft className="w-6 h-6 text-foreground" />
        <h1 className="text-lg font-medium">Review transfer</h1>
        <div className="w-6 h-6" />
      </div>

      <div className="px-4 space-y-4">
        {/* To Section */}
        <Card className="p-4 bg-card border-border">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">To</p>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-success rounded p-1">
                <User className="w-4 h-4 text-success-foreground" />
              </div>
              <Input
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="bg-transparent border-none p-0 text-foreground text-base font-medium focus-visible:ring-0"
              />
            </div>
          </div>
        </Card>

        {/* IBAN Section */}
        <Card className="p-4 bg-card border-border">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">IBAN</p>
            <Input
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              className="bg-transparent border-none p-0 text-foreground text-base focus-visible:ring-0"
            />
          </div>
        </Card>

        {/* Estimated Arrival Section */}
        <Card className="p-4 bg-card border-border">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Estimated arrival</p>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-success-foreground" />
              </div>
              <Input
                value={estimatedArrival}
                onChange={(e) => setEstimatedArrival(e.target.value)}
                className="bg-transparent border-none p-0 text-success text-base focus-visible:ring-0"
              />
            </div>
          </div>
        </Card>

        {/* Reference Section */}
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Reference</p>
              <p className="text-base text-foreground">Sent from Revolut</p>
            </div>
            <div className="flex items-center space-x-1 text-success">
              <Edit2 className="w-4 h-4" />
              <span className="text-sm">Edit</span>
            </div>
          </div>
        </Card>

        {/* Financial Details Section */}
        <Card className="p-4 bg-card border-border">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-base text-foreground">Recipient gets</span>
              <div className="flex items-center space-x-1">
                <Input
                  value={recipientGets}
                  onChange={(e) => setRecipientGets(e.target.value)}
                  className="bg-transparent border-none p-0 text-right text-base w-16 focus-visible:ring-0"
                />
                <span className="text-base text-foreground">Kč</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-base text-foreground">Fees</span>
              <span className="text-base text-foreground">No fees</span>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-base font-medium text-foreground">Your total</span>
              <div className="flex items-center space-x-1">
                <Input
                  value={yourTotal}
                  onChange={(e) => setYourTotal(e.target.value)}
                  className="bg-transparent border-none p-0 text-right text-base font-medium w-16 focus-visible:ring-0"
                />
                <span className="text-base font-medium text-foreground">Kč</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Add to Trusted Section */}
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-base text-foreground">Add to trusted</span>
              <div className="w-4 h-4 border border-muted-foreground rounded-full flex items-center justify-center">
                <div className="w-2 h-2 text-muted-foreground text-xs">i</div>
              </div>
            </div>
            <Switch
              checked={addToTrusted}
              onCheckedChange={setAddToTrusted}
            />
          </div>
        </Card>

        {/* Send Button */}
        <div className="pt-6 pb-8">
          <Button 
            className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-lg font-medium rounded-full"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
