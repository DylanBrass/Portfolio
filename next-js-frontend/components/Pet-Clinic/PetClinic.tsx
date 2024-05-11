import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import mainPage from "@/public/pet-clinic.png";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PetClinic({dict} : any) {

    //#region code
    const codeStringForIsUserSpecific = "package com.petclinic.bffapigateway.utils.Security.Annotations;\n" +
        "\n" +
        "import com.petclinic.bffapigateway.utils.Security.Variables.Roles;\n" +
        "import jakarta.validation.Valid;\n" +
        "import jakarta.validation.constraints.NotEmpty;\n" +
        "\n" +
        "import java.lang.annotation.*;\n" +
        "\n" +
        "/**\n" +
        " * <h1>\n" +
        " * Annotation for securing an endpoint to be accessible by a specific user only.\n" +
        " *</h1>\n" +
        " *\n" +
        " * <p>\n" +
        " * When present, this annotation will require a valid token and will check if the user id in the token matches the id specified in the annotation.\n" +
        " * You specify which fields need to match in the idToMatch field.\n" +
        " * This means that if you specify the idToMatch field as {\"ownerId\"} it will match the path variable called ownerId and the JWT id field.\n" +
        " * You can add as many fields as you want to the idToMatch field, this will check if the JWT id matched any of the path variables.\n" +
        " *\n" +
        " * </p>\n" +
        " * <br>\n" +
        " * <p>\n" +
        " *  The bypass role field is used to specify which roles can bypass this annotation.\n" +
        " *  This means if Vet is specified, any vet can access this endpoint, but any owners will need to be the concerned owner.\n" +
        " *  If Admin is specified, any admin can access this endpoint, but any owners or vets will need to be the concerned owner.\n" +
        " *  <strong>If an empty array is specified, only the concerned owner can access this endpoint and no role will bypass this requirement.</strong>\n" +
        " * </p>\n" +
        " * <br>\n" +
        " * <p>\n" +
        " *   WARNING : If you specify ANONYMOUS or ALL this annotation is redundant.\n" +
        " * </p>\n" +
        " *\n" +
        " * <p>\n" +
        " *  If no roles are specified ADMIN is default.\n" +
        " * </p>\n" +
        " * @author Dylan Brassard\n" +
        " * @since 2023-09-27\n" +
        " * @see SecuredEndpoint\n" +
        " */\n" +
        "\n" +
        "@Target({ ElementType.METHOD })\n" +
        "@Retention(RetentionPolicy.RUNTIME)\n" +
        "@Documented\n" +
        "public @interface IsUserSpecific {\n" +
        "\n" +
        "    @Valid\n" +
        "    Roles[] bypassRoles() default {Roles.ADMIN};\n" +
        "\n" +
        "    @NotEmpty\n" +
        "    @Valid\n" +
        "    String[] idToMatch();\n" +
        "}"

    const codeForFilter = "@Slf4j\n" +
        "@Component\n" +
        "@RequiredArgsConstructor\n" +
        "@Order(3)\n" +
        "@Generated\n" +
        "public class IsUserFilter implements WebFilter {\n" +
        "\n" +
        "    private final JwtTokenUtil jwtTokenUtil;\n" +
        "\n" +
        "    private final RequestMappingHandlerMapping requestMappingHandlerMapping;\n" +
        "\n" +
        "\n" +
        "    @Override\n" +
        "    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {\n" +
        "\n" +
        "        if (exchange.getAttribute(\"whitelisted\") != null && exchange.getAttribute(\"whitelisted\") instanceof Boolean) {\n" +
        "            if((boolean) exchange.getAttribute(\"whitelisted\")) {\n" +
        "                return chain.filter(exchange);\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "        HandlerMethod handler;\n" +
        "        try {\n" +
        "            handler = (HandlerMethod) requestMappingHandlerMapping.getHandler(exchange).toFuture().get();\n" +
        "        } catch (InterruptedException | ExecutionException e) {\n" +
        "            throw new HandlerIsNullException(e.getMessage());\n" +
        "        }\n" +
        "\n" +
        "        if (handler == null) {\n" +
        "            throw new HandlerIsNullException(\"Handler is null, check if the endpoint is valid\");\n" +
        "        }\n" +
        "\n" +
        "        if (handler.getMethod().getAnnotation(IsUserSpecific.class) == null) {\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        if (Arrays.stream(handler.getMethod().getAnnotation(IsUserSpecific.class).bypassRoles()).anyMatch(role -> role == Roles.ALL)\n" +
        "        || Arrays.stream(handler.getMethod().getAnnotation(IsUserSpecific.class).bypassRoles()).anyMatch(role -> role == Roles.ANONYMOUS)) {\n" +
        "\n" +
        "            if(Arrays.stream(handler.getMethod().getAnnotation(IsUserSpecific.class).bypassRoles()).anyMatch(role -> role == Roles.ANONYMOUS))\n" +
        "                log.error(\"Endpoint is not secured, anyone can access it and annotation is redundant. This is likely caused because the bypassRoles array contains ANONYMOUS.\");\n" +
        "\n" +
        "\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "        else {\n" +
        "\n" +
        "\n" +
        "            TokenResponseDTO tokenResponseDTO = (TokenResponseDTO) exchange.getAttribute(\"tokenValues\");\n" +
        "\n" +
        "\n" +
        "            if (tokenResponseDTO == null) {\n" +
        "                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);\n" +
        "                return exchange.getResponse().writeWith(Mono.just(exchange.getResponse().bufferFactory().wrap(\"No token provided\".getBytes())));\n" +
        "            }\n" +
        "\n" +
        "            List<String> roles = tokenResponseDTO.getRoles();\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "            if (roles == null) {\n" +
        "                return Mono.error(new InvalidTokenException(\"Unauthorized, invalid token\"));\n" +
        "            }\n" +
        "\n" +
        "\n" +
        "            for (String role : roles) {\n" +
        "                role = role.replace(\"[\", \"\")\n" +
        "                        .replace(\"]\", \"\")\n" +
        "                        .replace(\",\",\"\")\n" +
        "                        .trim();\n" +
        "\n" +
        "               if(Arrays.toString(handler.getMethod().getAnnotation(IsUserSpecific.class).bypassRoles()).contains(role)){\n" +
        "                   return chain.filter(exchange);\n" +
        "               }\n" +
        "            }\n" +
        "\n" +
        "            String[] idToMatch = handler.getMethod().getAnnotation(IsUserSpecific.class).idToMatch();\n" +
        "\n" +
        "\n" +
        "\n" +
        "            Map<String,String> pathVariables = exchange.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);\n" +
        "\n" +
        "\n" +
        "\n" +
        "            if (pathVariables == null){\n" +
        "                throw new ForbiddenAccessException(\"You are not allowed to access this resource\");\n" +
        "            }\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "            String tokenId = tokenResponseDTO.getUserId();\n" +
        "\n" +
        "\n" +
        "            for (String id : idToMatch) {\n" +
        "                if (pathVariables.get(id) == null) {\n" +
        "                    throw new InvalidInputException(\"This is likely error is caused by assigning the wrong id to the annotation\");\n" +
        "                }\n" +
        "                if (!pathVariables.get(id).equals(tokenId)) {\n" +
        "                    throw new ForbiddenAccessException(\"You are not allowed to access this resource\");\n" +
        "                }\n" +
        "            }\n" +
        "\n" +
        "            return chain.filter(exchange);\n" +
        "\n" +
        "\n" +
        "        }\n" +
        "\n" +
        "    }\n" +
        "}"




    const codeForJWTFilter = "@Slf4j\n" +
        "@Component\n" +
        "@Order(1)\n" +
        "@Generated\n" +
        "public class JwtTokenFilter implements WebFilter {\n" +
        "\n" +
        "    AntPathMatcher antPathMatcher = new AntPathMatcher();\n" +
        "\n" +
        "    private final RequestMappingHandlerMapping requestMappingHandlerMapping;\n" +
        "\n" +
        "    private final AuthServiceClient authValidationService;\n" +
        "\n" +
        "    private final JwtTokenUtil jwtTokenUtil;\n" +
        "\n" +
        "    private final HashMap<String, String> AUTH_WHITELIST = new HashMap<>();\n" +
        "    //fill up the hashmap with the endpoints that are whitelisted\n" +
        "\n" +
        "\n" +
        "    public JwtTokenFilter(RequestMappingHandlerMapping requestMappingHandlerMapping, AuthServiceClient authValidationService, JwtTokenUtil jwtTokenUtil) {\n" +
        "        this.requestMappingHandlerMapping = requestMappingHandlerMapping;\n" +
        "        this.authValidationService = authValidationService;\n" +
        "        this.jwtTokenUtil = jwtTokenUtil;\n" +
        "        //All white listed endpoints\n" +
        "        AUTH_WHITELIST.put(\"/v2/api-docs\",\"/v2/api-docs\");\n" +
        "        AUTH_WHITELIST.put(\"/swagger-resources\",\"/swagger-resources\");\n" +
        "        AUTH_WHITELIST.put(\"/swagger-resources/**\",\"/swagger-resources/**\");\n" +
        "        AUTH_WHITELIST.put(\"/configuration/ui\",\"/configuration/ui\");\n" +
        "        AUTH_WHITELIST.put(\"/configuration/security\",\"/configuration/security\");\n" +
        "        AUTH_WHITELIST.put(\"/swagger-ui.html\",\"/swagger-ui.html\");\n" +
        "        AUTH_WHITELIST.put(\"/webjars/**\",\"/webjars/**\");\n" +
        "        AUTH_WHITELIST.put(\"/v3/api-docs/**\",\"/v3/api-docs/**\");\n" +
        "        AUTH_WHITELIST.put(\"/swagger-ui/**\",\"/swagger-ui/**\");\n" +
        "        AUTH_WHITELIST.put(\"/scripts/**\",\"/scripts/**\");\n" +
        "        AUTH_WHITELIST.put(\"/css/**\",\"/css/**\");\n" +
        "        AUTH_WHITELIST.put(\"/images/**\",\"/images/**\");\n" +
        "        AUTH_WHITELIST.put(\"/images/*\",\"/images/*\");\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "\n" +
        "    @SuppressWarnings(\"NullableProblems\")\n" +
        "    @Override\n" +
        "    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {\n" +
        "        String path = exchange.getRequest().getURI().getPath();\n" +
        "\n" +
        "        //todo optimize this\n" +
        "       if (AUTH_WHITELIST.keySet().stream().anyMatch(pattern -> antPathMatcher.match(pattern, path))) {\n" +
        "            exchange.getAttributes().put(\"whitelisted\", true);\n" +
        "\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "\n" +
        "        if (Objects.requireNonNull(exchange.getRequest().getHeaders().get(HttpHeaders.ACCEPT)).get(0).contains(\"html\")\n" +
        "                && path.equals(\"/\")\n" +
        "                && exchange.getRequest().getMethod().toString().equals(\"GET\")) {\n" +
        "            exchange.getAttributes().put(\"whitelisted\", true);\n" +
        "\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        HandlerMethod handler;\n" +
        "        try {\n" +
        "            handler = (HandlerMethod) requestMappingHandlerMapping.getHandler(exchange).toFuture().get();\n" +
        "        } catch (InterruptedException | ExecutionException e) {\n" +
        "            throw new RuntimeException(e.getMessage());\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        if(handler == null)\n" +
        "        {\n" +
        "            throw new HandlerIsNullException(\"Handler is null, this probably means that the endpoint does not exist : \" + path);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        exchange.getResponse().getHeaders().add(\"Access-Control-Allow-Origin\", \"*\");\n" +
        "\n" +
        "        exchange.getResponse().getHeaders().add(\"Access-Control-Allow-Methods\", \"GET, PUT, POST, DELETE, OPTIONS\");\n" +
        "\n" +
        "        if (handler.getMethod().getAnnotation(SecuredEndpoint.class) != null) {\n" +
        "            if(Arrays.asList(handler.getMethod().getAnnotation(SecuredEndpoint.class).allowedRoles()).contains(Roles.ANONYMOUS))\n" +
        "            {\n" +
        "                exchange.getAttributes().put(\"whitelisted\", true);\n" +
        "\n" +
        "                return chain.filter(exchange);\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        String token = jwtTokenUtil.getTokenFromRequest(exchange);\n" +
        "\n" +
        "        if (token == null) {\n" +
        "            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);\n" +
        "            return exchange.getResponse().writeWith(Mono.just(exchange.getResponse().bufferFactory().wrap(\"No token provided\".getBytes())));\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "\n" +
        "        Mono<ResponseEntity<TokenResponseDTO>> validationResponse = authValidationService.validateToken(token);\n" +
        "\n" +
        "\n" +
        "        return validationResponse.flatMap(responseEntity -> {\n" +
        "            if (responseEntity.getStatusCode() == HttpStatus.OK && responseEntity.getBody() != null) {\n" +
        "                // Token is valid, proceed with the request\n" +
        "                exchange.getAttributes().put(\"tokenValues\", responseEntity.getBody());\n" +
        "\n" +
        "                return chain.filter(exchange);\n" +
        "                }\n" +
        "        else {\n" +
        "            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);\n" +
        "\n" +
        "            return exchange.getResponse().writeWith(Mono.just(exchange.getResponse().bufferFactory().wrap((\"Authentication refused !\\n\"+ responseEntity.getBody()).getBytes() )));\n" +
        "        }\n" +
        "        });\n" +
        "\n" +
        "\n" +
        "    }\n" +
        "}"


    const codeForRoleFilter = "\n" +
        "@Slf4j\n" +
        "@Component\n" +
        "@Order(2)\n" +
        "@Generated\n" +
        "public class RoleFilter implements WebFilter {\n" +
        "\n" +
        "    private final JwtTokenUtil jwtTokenUtil;\n" +
        "\n" +
        "    private final RequestMappingHandlerMapping requestMappingHandlerMapping;\n" +
        "\n" +
        "\n" +
        "\n" +
        "    public RoleFilter(JwtTokenUtil jwtTokenUtil, RequestMappingHandlerMapping requestMappingHandlerMapping) {\n" +
        "        this.jwtTokenUtil = jwtTokenUtil;\n" +
        "        this.requestMappingHandlerMapping = requestMappingHandlerMapping;\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    @SuppressWarnings(\"NullableProblems\")\n" +
        "    @Override\n" +
        "    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {\n" +
        "\n" +
        "\n" +
        "\n" +
        "        if (exchange.getAttribute(\"whitelisted\") != null && exchange.getAttribute(\"whitelisted\") instanceof Boolean) {\n" +
        "            if((boolean) exchange.getAttribute(\"whitelisted\")) {\n" +
        "                return chain.filter(exchange);\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "\n" +
        "        HandlerMethod handler;\n" +
        "        try {\n" +
        "            handler = (HandlerMethod) requestMappingHandlerMapping.getHandler(exchange).toFuture().get();\n" +
        "        } catch (InterruptedException | ExecutionException e) {\n" +
        "            throw new HandlerIsNullException(e.getMessage());\n" +
        "        }\n" +
        "\n" +
        "        if (handler == null) {\n" +
        "            throw new HandlerIsNullException(\"Handler is null, check if the endpoint is valid\");\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "\n" +
        "        if (handler.getMethod().getAnnotation(SecuredEndpoint.class) == null\n" +
        "                || Arrays.stream(handler.getMethod().getAnnotation(SecuredEndpoint.class).allowedRoles()).anyMatch(role -> role == Roles.ALL)){\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "        List<Roles> rolesAllowed = List.of(handler.getMethod().getAnnotation(SecuredEndpoint.class).allowedRoles());\n" +
        "\n" +
        "        log.debug(\"Roles allowed: {}\", rolesAllowed);\n" +
        "\n" +
        "        if (rolesAllowed.isEmpty()) {\n" +
        "            return chain.filter(exchange);\n" +
        "        }\n" +
        "        TokenResponseDTO tokenResponseDTO = (TokenResponseDTO) exchange.getAttribute(\"tokenValues\");\n" +
        "\n" +
        "        if (tokenResponseDTO == null) {\n" +
        "            return Mono.error(new ForbiddenAccessException(\"No token attached to request\"));\n" +
        "        }\n" +
        "\n" +
        "        List<String> roles = tokenResponseDTO.getRoles();\n" +
        "\n" +
        "\n" +
        "        log.debug(\"Roles: {}\", roles);\n" +
        "\n" +
        "\n" +
        "        if (roles == null) {\n" +
        "            return Mono.error(new ForbiddenAccessException(\"No roles attached to token\"));\n" +
        "        }\n" +
        "\n" +
        "\n" +
        "        for (String role : roles) {\n" +
        "            role = role.replace(\"[\", \"\")\n" +
        "                    .replace(\"]\", \"\")\n" +
        "                    .replace(\",\",\"\")\n" +
        "                    .trim();\n" +
        "            log.debug(\"Role: {}\", role);\n" +
        "\n" +
        "            if (rolesAllowed.contains(Roles.valueOf(role.toUpperCase()))) {\n" +
        "                log.debug(\"Role {} is allowed\", role);\n" +
        "                return chain.filter(exchange);\n" +
        "            }\n" +
        "        }\n" +
        "\n" +
        "        return Mono.error(new ForbiddenAccessException(\"Unauthorized, you do not possess the necessary permissions to access the endpoint\"));\n" +
        "    }\n" +
        "}"

    //#endregion

    return (
        <div>

            <h1 className={"text-center"} id={"pet-clinic"}>Pet Clinic</h1>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 m-auto"}>
                            <img src={mainPage.src} alt={"Corso"} width={"100%"}/>
                        </div>
                        <div className={"w-1/2 text-center p-2"}>
                            <h3>
                                <a href={"https://github.com/cgerard321/champlain_petclinic"}>
                                    {dict.slide1.view}
                                </a>
                            </h3>
                            <p>
                                {dict.slide1.p1}
                                (<a href={"https://github.com/spring-petclinic/spring-petclinic-microservices"}>{dict.slide1.view}</a>) implementation.
                                {dict.slide1.p2}

                                <br/>
                                <br/>

                                {dict.slide1.p3}

                                <br/>
                                <br/>
                                {dict.slide1.p4}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>

                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>

                            <SyntaxHighlighter language={"java"} style={atomDark}>
                                {codeStringForIsUserSpecific}
                            </SyntaxHighlighter>
                        </div>

                        <div className={"w-1/2 text-center p-2"}>

                            <p className={"m-auto"}>
                                {dict.slide2.p1}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>

                            <SyntaxHighlighter language={"java"} style={atomDark}>
                                {codeForFilter}
                            </SyntaxHighlighter>
                        </div>

                        <div className={"w-1/2 text-center p-2"}>

                            <p className={"m-auto"}>
                                {dict.slide3.p1}
                            </p>
                            <p>
                                {dict.slide3.p2}
                            </p>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className={"flex h-fit p-8"}>
                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>
                            <h1>JWT Filter</h1>
                            <SyntaxHighlighter language={"java"} style={atomDark}>
                                {codeForJWTFilter}
                            </SyntaxHighlighter>
                        </div>

                        <div className={"w-1/2 p-2 max-h-96 overflow-scroll"}>
                            <h1>Role Filter</h1>
                            <SyntaxHighlighter language={"java"} style={atomDark}>
                                {codeForRoleFilter}
                            </SyntaxHighlighter>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
}

