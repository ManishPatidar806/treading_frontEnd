import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import React from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    console.log("manish IS");
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$99999</p>
      </div>

      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none
                px-0 text-2xl text-center"
            placeholder="$99999"
            type="number"
          />
        </div>
      </div>

      <div>
        <p className="pb-2">Transfer to</p>

        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img src="" className="h-8 w-8" alt="" />

          <div>
            <p className=" text-xl font-bold ">Yes Bank</p>
            <p className="text-xs">**************1651</p>
          </div>
        </div>
      </div>

 <DialogClose className="w-full">
 <Button onClick={handleSubmit} className="w-full py-7 text-xl">
        Withdrawal
      </Button>

 </DialogClose>
 
    </div>
  );
};

export default WithdrawalForm;
