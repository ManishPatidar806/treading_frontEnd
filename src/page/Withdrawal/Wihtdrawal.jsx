import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
  }, []);

  return (
    <div className="p-5 lg:p-20 ">
      <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
      <Table>
        <TableHeader className="border">
          <TableRow>
            <TableHead className="py-5">Date </TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>

            <TableHead className="text-right ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawal.history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>{item.date.toString()}</p>
              </TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>${item.amount}</TableCell>
              <TableCell className="text-right text-green-500">
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
