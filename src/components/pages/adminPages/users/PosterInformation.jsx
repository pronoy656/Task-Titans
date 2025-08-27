import React from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/Avatar";
import PosterInformationTable from "./PosterInformationTable";
import { Button } from "../../../ui/Button";
import { Check, X } from "lucide-react";

const PosterInformation = () => {
  //Admin Action Buttons
  const handleUnblockUser = () => {
    console.log("User Unblocked");
  };

  const handleBlockUser = () => {
    console.log("Blocked User");
  };
  return (
    <div className="admin-page">
      <p className="text-center text-4xl font-semibold mb-3">
        Poster Information
      </p>
      <Card className="w-full max-w-7xl mx-auto border border-gray-200 py-7">
        <CardHeader>
          {/* <CardTitle className="text-center text-xl font-semibold mb-3">Tasker Information</CardTitle> */}
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <Avatar className="w-30 h-30 flex-shrink-0">
              <AvatarImage
                src="/Tasker-profile.png"
                alt="John Doe"
                className="object-cover"
              />
              <AvatarFallback className="text-lg font-medium">
                JD
              </AvatarFallback>
            </Avatar>

            {/* User Information Grid */}
            <div className="flex-1 grid grid-cols-2 gap-x-[500px] gap-y-4">
              <div>
                <p className="text-xl font-semibold text-muted-foreground mb-1">
                  User Name
                </p>
                <p className="font-normal">John Doe</p>
              </div>

              <div>
                <p className="text-xl font-semibold text-muted-foreground mb-1">
                  Email
                </p>
                <p className="font-normal">Example@gmail.com</p>
              </div>

              <div>
                <p className="text-xl font-semibold  text-muted-foreground mb-1">
                  User ID
                </p>
                <p className="font-normal">#001</p>
              </div>

              <div>
                <p className="text-xl font-semibold  text-muted-foreground mb-1">
                  Joining Date
                </p>
                <p className="font-normal">02/05/2025</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* // For table Show */}
      <div className="w-full max-w-7xl mx-auto mt-9">
        <PosterInformationTable></PosterInformationTable>
      </div>
      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Admin Actions
        </h2>

        <div className="flex gap-4">
          <Button
            onClick={handleUnblockUser}
            className="bg-green-500 hover:bg-green-600 text-white !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-medium min-w-[160px]"
          >
            <Check className="w-6 h-6" />
            Unblock User
          </Button>

          <Button
            onClick={handleBlockUser}
            className="bg-red-500 hover:bg-red-600  text-white !px-24 py-7 !text-lg rounded-lg flex items-center gap-2 font-semibold min-w-[160px]"
          >
            <X className="w-6 h-6" />
            Block User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PosterInformation;
