<template>
  <div class="contact-main">
    <div class="contact-main__container">
        <div class="contact-main__container__invitation">
            <h1>Contáctanos</h1>
            <ul>
                <li><a href="mailto:info@grupoalta.net"><strong>Email.  info@grupoalta.net</strong></a></li>
                <li><a href="tel:502-2374-5000"><strong>T. 2374-5000</strong></a></li>
                <li><a href="https://www.facebook.com/grupoaltagt" target="_blank">Facebook</a> <span>•</span> <a href="https://www.instagram.com/grupoaltagt/" target="_blank">Instagram</a></li>
            </ul>
            <h3>Forma parte de nuestro equipo</h3>
            <p>
                Si quieres formar parte de Grupo Alta o alguna de 
                nuestras empresas, envíanos tu CV a <a href="mailto:contrataciones@grupoalta.net"><strong>contrataciones@grupoalta.net</strong></a>
            </p>
        </div>
        <div class="contact-main__container__form">
            <form action="" v-on:submit="submitForm" name="submit-to-google-sheet">
                <input type="text" name="name" placeholder="Nombre" v-model="name" required>
                <input type="email" name="email" placeholder="Correo electrónico" v-model="email" required>
                <input type="phone" name="phone" placeholder="Teléfono" v-model="phone" required>
                <textarea name="message" id="" rows="10" placeholder="Escribe tu comentario o duda acá" v-model="message" required></textarea>
                <button type="submit">{{ buttonText }}</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ContactForm',
    data: function() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            buttonText: 'Enviar',
            errors: []
        }
    },
        methods: {
            clearForm(text) {
                this.name = '',
                this.email = '',
                this.phone = '',
                this.message = ''
                this.buttonText = text
            },
            submitForm(e) {
                e.preventDefault()
                this.buttonText = "Enviando tus datos...";
                console.log(document.forms['submit-to-google-sheet'])
                axios.post('https://script.google.com/macros/s/AKfycbzhDDyqb3deCd4BV8ZJDxuOTTBnQ-PZz2LqtS1fjjovbM3PJA/exec', 
                new FormData(document.forms['submit-to-google-sheet']))
                    .then(response => {
                        this.$swal({
                            position: 'center',
                            icon: 'success',
                            title: 'Email enviado',
                            showConfirmButton: false,
                            timer: 500
                        })
                        console.log(response)
                        this.clearForm('Gracias!')
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                        this.$swal({
                            position: 'center',
                            title: 'Ups no se puede enviar el mensaje en este momento',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.clearForm('Intenta mas tarde gracias!')
                    })
            }
    }
}
</script>

<style lang="scss" scoped>
    .contact-main {
        background-color: black;
        width: 100%;
        height: calc(100vh + 250px);
        @include tablet {
            padding-top: 150px;
        }
        @include respond-to(850px) {
            height: auto;
        }
        .contact-main__container {
            @include generalMaxWidth;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;
            padding-top: 232px;
            @include respond-to(850px) {
                grid-template-columns: 1fr;
                padding-top: 50px;
            }
            .contact-main__container__invitation {
                h1 {
                    @include goldTitle;
                    margin-bottom: 40px;
                    text-align: left;
                }
                ul {
                    li, a {
                        color: white;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        letter-spacing: 1.31px;
                        line-height: 35px;
                        margin-bottom: 53px;
                    }
                }
                h3 {
                    color: $color-gold;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 25px;
                    font-style: italic;
                    font-weight: 500;
                    line-height: 50px;
                    margin-bottom: 16px;
                    font-weight: lighter;
                }
                p, p a {
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.88px;
                    line-height: 22px;
                }
            }
            .contact-main__container__form {
                form {
                    width: 100%;
                    input, textarea {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 8px 0;
                        box-sizing: border-box;
                        background-color: transparent;
                        border: 1px solid white;
                        color: #ADACAB;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        line-height: 26px;
                        &:focus {
                            outline-color: white;
                        }
                    }
                    textarea {
                        resize: none;
                        border: 1px solid white;
                    }
                    button {
                        background-color: $color-gold;
                        padding: 17.5px 43px;
                        border: 1px solid $color-gold;
                        color: white;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        letter-spacing: 0.88px;
                        line-height: 17px;
                        margin-bottom: 40px;
                        cursor: pointer;
                        &:hover, &:focus {
                            outline-color: $color-gold;
                        }
                        @include mobile {
                            display: block;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>