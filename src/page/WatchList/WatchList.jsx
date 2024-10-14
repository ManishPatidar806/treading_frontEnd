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

const WatchList = () => {
  const handleRemoveToWatchlist = (value) => {
    console.log(value);
  };

  return (
    <div className="p-5 lg:p-20 ">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table>
        <TableHeader className="border">
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right text-red-600">Remove</TableHead>
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
              <TableCell>$250.00</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
