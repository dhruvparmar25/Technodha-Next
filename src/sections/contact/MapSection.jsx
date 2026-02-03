export default function MapSection() {
  return ( 
    <section className=" py-16  max-w-[1230px] px-[15px] m-auto" >

      <div className="w-full h-70 md:h-85 overflow-hidden">

        <iframe
          src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
          className="w-full h-full border-0 rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

    </section>
  );
}
