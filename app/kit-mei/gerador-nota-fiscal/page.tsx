import { redirect } from "next/navigation";

// A NFS-e só pode ser emitida no portal da prefeitura — não vendemos PDF de
// nota fiscal. O produto foi substituído pelo Gerador de Recibo MEI.
export default function Page() {
  redirect("/kit-mei/gerador-recibo");
}
