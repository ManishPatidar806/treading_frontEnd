import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

import { Navigate, useNavigate } from "react-router-dom";

const AssetTable = ({coin, category}) => {
  const navigate = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coin.map((item, index) => (
          <TableRow key={index}>
            <TableCell
              onClick={() => navigate("/market/bitcoin")}
              className="font-medium flex items-center gap-2"
            >
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
  );
};

export default AssetTable;
