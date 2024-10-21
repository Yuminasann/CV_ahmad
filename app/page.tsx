import Hero from "./components/hero";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import { RiwayatPekerjaan } from "./components/RiwayatPekerjaan";
import RowRiwayat from "./components/rowRiwayat";
import foto from "./profile.jpg";
import "./style.css"
import Warna from "./components/favColor"
import Input from "./components/Formkontak"



export default function Gallery() {
  return (
    <section>
      <Hero />
     <RiwayatPendidikan />
     <RiwayatPekerjaan />
     <Warna />
     <Input/>
    </section>
  );
}
