<template>
    <div class="bootstrap">
        <h1>{{ msg }}</h1>
        <h5>REST service call are easy to do with Vue.js, if you know how to do it.</h5>
        <p></p>
        <h6><span class="badge bg-primary"> Let´s go!</span> Call a Spring Boot REST backend service, by clicking a
            button:</h6>
        <p></p>
        <button class="btn btn-success" @click="callHelloApi()" id="btnCallHello">/hello (GET)</button>
        <p></p>
        <h4>Backend response: <span class="alert alert-primary" role="alert" :show="showResponse" dismissible
                                    @dismissed="showResponse=false">{{ backendResponse }}</span></h4>

        <BButton variant="secondary" v-b-toggle="'collapseOuter'">Show Response
            details
        </BButton>
        <p></p>
        <BCollapse id="collapseOuter">
            <div class="card card-body">
                The Response hat this details
                <BButton variant="primary" v-b-toggle="'collapseInnerStatusCode'">HTTP
                    Status
                </BButton>

                <BCollapse id="collapseInnerStatusCode">
                    <div class="card card-body">Status: {{ httpStatusCode }}</div>
                    <div class="card card-body">Status Text: {{ httpStatusText }}</div>
                </BCollapse>

                <BButton variant="danger" v-b-toggle="'collapseInnerResponseConfig'">
                    Full Request configuration
                </BButton>
                <BCollapse id="collapseInnerResponseConfig">
                    <div class="card card-body">Config: {{ responseConfig }}</div>
                </BCollapse>
            </div>
        </BCollapse>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '@/api/backend-api'
import { AxiosError, AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import { BButton, BCollapse } from "bootstrap-vue-next";

interface State {
    msg: string;
    showResponse: boolean;
    backendResponse: string;
    responseConfig: any;
    httpStatusCode: number;
    httpStatusText: string;
    errors: AxiosError[]
}

export default defineComponent({
    name: 'Bootstrap',
    components: { BButton, BCollapse },
    data: (): State => {
        return {
            msg: 'Nice Bootstrap candy!',
            showResponse: false,
            backendResponse: '',
            responseConfig: '',
            httpStatusCode: 0,
            httpStatusText: '',
            errors: [],
        }
    }, methods: {
        callHelloApi(): any {
            api.hello().then(response => {
                this.backendResponse = response.data;
                this.httpStatusCode = response.status;
                this.httpStatusText = response.statusText;
                this.responseConfig = response.config;
                this.showResponse = true
            })
                .catch((error: AxiosError) => {
                    this.errors.push(error)
                })
        },
    },
});

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    margin-bottom: 20px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
