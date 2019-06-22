<template>
    <div>
        <v-app>
            <v-content>
        <v-container fuild grid-list-xl>
            <v-layout column justify-center>

                <v-flex xs12>
                    <picture-input
                            ref="pictureInput"
                            @change="onChange"
                            @error="eventError"
                            width="200"
                            height="200"
                            margin="16"
                            accept="image/jpeg,image/png"
                            size="0.5"
                            buttonClass="btn"
                            :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a jpg or png image. Click here for open file browser.'
      }">
                    </picture-input>
                </v-flex>



                <v-flex xs12><!--Alert container -->

                    <!--Alert messages -->
                    <v-alert
                            color="red"
                            :value="errorState"
                            type="error"
                            transition="scale-transition"
                    >
                        {{errorMsg}}
                    </v-alert>


                    <v-alert
                            :value=noSelectObj
                            type="info"
                    >
                        For change color or font need select text, please select text.
                    </v-alert>

                    <!--End Alert messages -->

                </v-flex><!--End Alert container -->

                <v-spacer></v-spacer>

               <v-flex xs12 ><!--Container for canvas and menu -->

                   <v-layout row justify-center>
                       <div>
                   <canvas ref="canvas" class="app-canvas">Sorry, but your browser is old((</canvas>
                       </div>
                   </v-layout>

                   <v-layout row justify-center
                             v-if="showPanel">
                       <v-btn v-on:click="addText" >Add Text</v-btn>

                       <v-flex md2>

                       <v-select
                               heigth="20"
                               :items="colors"
                               label="Set color"
                               solo
                               @change="colorSelect"
                       ></v-select>
                           </v-flex>


                       <v-flex md2>

                           <v-select
                                   heigth="20"
                                   :items="fonts"
                                   label="Set font"
                                   solo
                                   @change="fontSelect"
                           ></v-select>
                       </v-flex>

                       <v-btn v-on:click="convertToImagen" >save</v-btn>

                   </v-layout>

                   <v-layout justify-center column v-if="imageLink" id="share-form">
                       <v-flex xs2>
                           <v-layout justify-center row>

                       <v-chip color="secondary" text-color="white">Fill this fields to share</v-chip>
                       <input class="shareInput" color="" v-model="titleImage" placeholder="Title">
                       <input class="shareInput" v-model="descriptionImage" placeholder="Description">
                       <a class="vk-link" v-if="titleImage && descriptionImage" v-bind:href="'https://vk.com/share.php?url=' + url + '&image=' + imageLink +  '&title= ' + titleImage + ': ' + descriptionImage + '&noparse=true' " target="_blank">Share vk.com</a>

                           </v-layout>
                       </v-flex>
                   </v-layout>



               </v-flex><!--End Container for canvas and menu -->





            </v-layout>
        </v-container>
            </v-content>
        </v-app>
    </div>
</template>



<script>
    import { fabric } from 'fabric'
    import PictureInput from 'vue-picture-input'
    import axios from 'axios'

    //fonts
    require('typeface-pacifico')
    require('typeface-vt323')
    require('typeface-quicksand')

    var FontFaceObserver = require('fontfaceobserver');

    export default {
        name: "CanvasApp",

        components:{
            'picture-input':PictureInput
        }, //end components

        data(){
            return{
                colors:[
                    { text: 'white', value : '#fff'},
                    { text: 'black', value : 'black'},
                    { text: 'red', value : 'red'},
                    { text: 'pink', value : 'pink'},
                ],
                fonts:['Pacifico', 'VT323', 'Quicksand'],
                canvas: null,
                width:800, //canvas width
                height: 800, //canvas height
                errorState: false, //for checking errors
                errorMsg: 'errorMsg',
                succesLoad: false, //for succes load image
                noSelectObj: false, //no selected item in fabric
                showPanel: false,
                vkshare: '', //link for share vk
                url: '', //url for share
                imageLink: '', //link to saved image
                titleImage: '',
                descriptionImage: '',

            }
        }, //end data

        mounted(){
            this.canvas = new fabric.Canvas(this.$refs.canvas, {
                width: this.width,
                height: this.height,
                selectionColor: "#90ccb7",
                backgroundColor: "white"
            });


        }, // end mounted


        methods: {

            convertToImagen() {
                let image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

                axios
                    .post('api/saveImage', {image: image}) //image in base64 code
                    .then(response =>
                        {
                            this.imageLink = response.data.imglink;
                            this.url = response.data.link;
                        }
                    );
            },

            //async font load, when selected font
            loadAndDrawFont(font){
                var font = new FontFaceObserver(font);
                font.load().then(function () {
                    return;
                });
            },

            fontText(font){
                let obj = this.canvas.getActiveObject();
                if(obj) { //if have obj
                    if (obj.get('type') === 'i-text') {
                        let canvas = this.canvas;
                        var fontLoad = new FontFaceObserver(font);
                        fontLoad.load().then(function () {
                            obj.set('fontFamily', font);
                            canvas.renderAll();
                        });
                        this.noSelectObj = false;

                    }
                }
                else{
                    this.noSelectObj = true;
                }
            },

            colorSelect(value){
                this.colorText(value);
            },

            fontSelect(value){
                this.fontText(value);
            },


            addText(){
                this.canvas.add(new fabric.IText('Enter your text here', {
                    fontFamily: 'Delicious_500',
                    left: this.canvas.width / 2,
                    top: this.canvas.height / 2
                }));
            },

            colorText(color){
                let obj = this.canvas.getActiveObject();
                if(obj) {
                    if (obj.get('type') === 'i-text') {
                        obj.setColor(color)
                        this.canvas.renderAll();
                        this.noSelectObj = false;
                    }
                    else{this.noSelectObj = true;}
                }
                else{this.noSelectObj = true;}


            },


            setStyle(textObject, styleName, value) {
                obj.set(
                    {
                        styleName: value
                    }
                );
                this.canvas.renderAll();
            },


            onChange (image) {
                if (image) {

                    this.noSelectObj = false; //clear info messages
                    this.errorState = false; //clear errors messages

                    let imgWidth = 0;
                    let imgHeigth = 0;

                    this.image = image;
                    let imageObj = new Image();
                    imageObj.src = this.image;
                    let canvas = this.canvas;

                    imageObj.onload = function() {

                        imgWidth = imageObj.width;
                        imgHeigth = imageObj.height;

                        let imgInstance = new fabric.Image(imageObj, {
                            left: 0,
                            top: 0,
                            angle: 0,
                            width:imgWidth,
                            height:imgHeigth
                        });

                        if(imgWidth <= 800 && imgHeigth <=800) {
                            canvas.clear();
                            canvas.backgroundColor="white";
                            canvas.setHeight(imgHeigth);
                            canvas.setWidth(imgWidth);
                            imgInstance.selectable = false; //off interactivity image
                            canvas.add(imgInstance);
                        }
                        else { alert('Only less then 801x801'); return;}

                    }//imageObj.onload

                    this.errorState = false; //clear errors messages
                    this.showPanel = true;

                } else {
                    alert('FileReader API not supported: use the <form>')
                }
            },

            eventError(error){
                if(error['type'] == 'fileSize'){
                    console.log(error);
                    this.errorState = true;
                    this.errorMsg = error['message'];
                }
            }, //eventError


        }, //methods

    }
</script>



<style>

    .shareInput{
        background: gainsboro;
        margin-left: 10px;
    }

    .vk-link{
        padding: 10px;
        background: #424cff;
        margin-left: 10px;
        color: white;
        border-radius: 10px;
    }

</style>