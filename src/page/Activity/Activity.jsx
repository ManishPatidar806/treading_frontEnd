
import React from "react";
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

const Activity = ()=>{
    return( 
    <div className="p-5 lg:p-20 ">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>
        <Table>
          <TableHeader className="border">
            <TableRow>
              <TableHead className="py-5">Date & Time</TableHead>
              <TableHead>Treading pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead>Selling Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Profit&Lose</TableHead>
              <TableHead className="text-right ">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                <p>2024/05/31</p>
                <p className="text-gray-400">12:39:32</p>
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50 flex">
                    <AvatarImage
                      height={45}
                      width={45}
                      src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035"
                    ></AvatarImage>
                    <span>BitCoin</span>
                  </Avatar>
                </TableCell>
                
                <TableCell>456245646</TableCell>
                <TableCell>1234567897894</TableCell>
                <TableCell>CreaditCard</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell className="text-right">
                    $250151.00
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    )
}

export default Activity;