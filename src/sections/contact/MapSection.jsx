export default function MapSection() {
  return ( 
    <section className=" py-12 px-6 xl:px-30 " >

      <div className="w-full h-[280px] md:h-[340px] overflow-hidden">

        <iframe
          src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
          className="w-full h-full border-0 rounded-[12px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

    </section>
  );
}
