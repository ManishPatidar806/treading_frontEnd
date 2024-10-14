import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Avatar, AvatarImage } from "@radix-ui/react-avatar";



const Portfolio = () => {
  return (
    <div className="p-5 lg:p-20 " >

        <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
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
              <TableCell>BTC</TableCell>
              <TableCell>456245646</TableCell>
              <TableCell>1234567897894</TableCell>
              <TableCell>123.5448145</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
