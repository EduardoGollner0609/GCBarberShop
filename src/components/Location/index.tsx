import './styles.css';

export default function Location() {
  return (
    <>
      <h1>Nosso Endereço</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0222311089706!2d-40.29983272513865!3d-20.257912748602703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8186ddfbb9aed%3A0xb7b009d2a7221dac!2sAv.%20Prof.%20Fernando%20Duarte%20Rabelo%2C%20860%20-%20Maria%20Ortiz%2C%20Vit%C3%B3ria%20-%20ES%2C%2029070-822!5e0!3m2!1spt-BR!2sbr!4v1728727353603!5m2!1spt-BR!2sbr"
        width="550"
        height="450"
        style={{ border: "0;"}}
        loading="lazy"
      ></iframe>
    </>
  );
}
