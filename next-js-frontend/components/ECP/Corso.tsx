import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism"
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';

export default function Corso() {

    SyntaxHighlighter.registerLanguage('java', java);
    const codeString = "\n" +
        "@Slf4j\n" +
        "@Generated\n" +
        "@Configuration\n" +
        "@EnableWebSecurity\n" +
        "@EnableMethodSecurity\n" +
        "@RequiredArgsConstructor\n" +
        "public class SpringSecurityConfigBean {\n" +
        "    @Value(\"${okta.oauth2.issuer}\")\n" +
        "    private String issuer;\n" +
        "\n" +
        "    @Value(\"${okta.oauth2.client-id}\")\n" +
        "    private String clientId;\n" +
        "\n" +
        "    @Value(\"${frontend.url}\")\n" +
        "    private String frontendDomain;\n" +
        "\n" +
        "    @Value(\"${backend.url}\")\n" +
        "    private String backendDomain;\n" +
        "\n" +
        "    private final DomainHandling domainHandling;\n" +
        "\n" +
        "    private final ObjectMapper mapper;\n" +
        "\n" +
        "    @Bean\n" +
        "    public SecurityFilterChain configure(HttpSecurity http) throws Exception {\n" +
        "        http.authorizeHttpRequests(authorize -> authorize\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(\"/api/v1/corso/auth0/manage/**\")).hasAuthority(\"Admin\")\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(\"/api/v1/corso/server/status\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(\"/api/v1/corso/security/verify\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(\"/api/v1/corso/email/**\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/galleries/carousel\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/services\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/services/{serviceId}\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/faqs\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/faqs/preferred\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/reviews/pinned\")).permitAll()\n" +
        "                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.GET, \"/api/v1/corso/auth0/manage/users\")).permitAll()\n" +
        "                        .anyRequest().authenticated()\n" +
        "                )\n" +
        "                .exceptionHandling(exceptionHandling -> exceptionHandling.authenticationEntryPoint(authenticationEntryPoint()))\n" +
        "                .oauth2Login(httpSecurityOAuth2LoginConfigurer -> httpSecurityOAuth2LoginConfigurer\n" +
        "                        .loginPage(\"/login/oauth2/code/okta\")\n" +
        "                        .defaultSuccessUrl(backendDomain + \"api/v1/corso/security/redirect\", true)\n" +
        "                        .permitAll())\n" +
        "                .oauth2ResourceServer(jwt -> jwt.jwt(withDefaults()))\n" +
        "                .logout(logout -> {\n" +
        "                    logout.logoutUrl(\"/api/v1/corso/logout\")\n" +
        "                            .addLogoutHandler(logoutHandler())\n" +
        "                            .logoutSuccessHandler((request, response, authentication) -> {\n" +
        "\n" +
        "                                if (request.getCookies() != null) {\n" +
        "\n" +
        "                                    Arrays.stream(request.getCookies()).toList().forEach(cookie -> {\n" +
        "                                        log.info(cookie.getName());\n" +
        "                                        Cookie newCookie = new Cookie(cookie.getName(), \"\");\n" +
        "                                        newCookie.setMaxAge(0);\n" +
        "                                        newCookie.setPath(\"/\");\n" +
        "                                        newCookie.setDomain(frontendDomain.replace(\"https://\", \"\").replace(\"http://\", \"\")\n" +
        "                                                .split(\":\")[0].replace(\"/\", \"\"));\n" +
        "                                        response.addCookie(newCookie);\n" +
        "\n" +
        "                                    });\n" +
        "                                }\n" +
        "                                response.setStatus(HttpStatus.OK.value());\n" +
        "                            });\n" +
        "                })\n" +
        "                .csrf((csrf) -> csrf\n" +
        "                        .csrfTokenRepository(csrfTokenRepository())\n" +
        "                        .csrfTokenRequestHandler(new SpaCsrfToken())\n" +
        "                        .ignoringRequestMatchers(\n" +
        "                                new AntPathRequestMatcher(\"/api/v1/corso/logout\", HttpMethod.POST.toString()),\n" +
        "                                new AntPathRequestMatcher(\"/api/v1/corso/security/redirect\", HttpMethod.GET.toString())\n" +
        "                        )\n" +
        "                )\n" +
        "                .cors(httpSecurityCorsConfigurer -> {\n" +
        "                    final var cors = new CorsConfiguration();\n" +
        "                    cors.setAllowedOrigins(List.of(frontendDomain));\n" +
        "                    cors.setAllowedMethods(Arrays.asList(\"GET\", \"POST\", \"PUT\", \"DELETE, HEAD, PATCH\"));\n" +
        "                    cors.setAllowedHeaders(Arrays.asList(\"authorization\", \"content-type\", \"xsrf-token\"));\n" +
        "                    cors.setExposedHeaders(List.of(\"xsrf-token\"));\n" +
        "                    cors.setAllowCredentials(true);\n" +
        "                    cors.setMaxAge(3600L);\n" +
        "                })\n" +
        "                .addFilterAfter(new CsrfCustomFilter(), BasicAuthenticationFilter.class);\n" +
        "        return http.build();\n" +
        "    }\n" +
        "\n" +
        "    private AuthenticationEntryPoint authenticationEntryPoint() {\n" +
        "        return (request, response, authException) -> {\n" +
        "            final String json;\n" +
        "            final ErrorMessage errorMessage;\n" +
        "            if (Arrays.stream(request.getCookies()).anyMatch(cookie -> cookie.getName().equals(\"isAuthenticated\"))) {\n" +
        "\n" +
        "                errorMessage = ErrorMessage.from(\"Your session has expired.\");\n" +
        "\n" +
        "            } else {\n" +
        "                errorMessage = ErrorMessage.from(authException.getMessage());\n" +
        "            }\n" +
        "\n" +
        "            json = mapper.writeValueAsString(errorMessage);\n" +
        "\n" +
        "            log.error(\"Error: {}\", json);\n" +
        "            log.error(\"Error: {}\", authException.getMessage());\n" +
        "            log.error(\"Error: {}\", authException.getLocalizedMessage());\n" +
        "\n" +
        "\n" +
        "\n" +
        "            response.setStatus(HttpStatus.UNAUTHORIZED.value());\n" +
        "            response.setContentType(MediaType.APPLICATION_JSON_VALUE);\n" +
        "            response.getWriter().write(json);\n" +
        "            response.flushBuffer();\n" +
        "        };\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "    private LogoutHandler logoutHandler() {\n" +
        "        return (request, response, authentication) -> {\n" +
        "\n" +
        "            if (request.getCookies() != null) {\n" +
        "\n" +
        "                List<Cookie> cookies = List.of(request.getCookies());\n" +
        "\n" +
        "\n" +
        "                cookies.forEach(cookie -> {\n" +
        "                    Cookie newCookie = new Cookie(cookie.getName(), \"\");\n" +
        "                    newCookie.setMaxAge(0);\n" +
        "                    newCookie.setPath(\"/\");\n" +
        "                    newCookie.setDomain(domainHandling.getFormattedDomain());\n" +
        "                    response.addCookie(newCookie);\n" +
        "                });\n" +
        "            }\n" +
        "\n" +
        "            boolean isSignup = Boolean.parseBoolean(request.getParameter(\"isLogoutSignUp\"));\n" +
        "            boolean isVerify = Boolean.parseBoolean(request.getParameter(\"isLogoutVerify\"));\n" +
        "            boolean isExternal = Boolean.parseBoolean(request.getParameter(\"isLogoutExternal\"));\n" +
        "\n" +
        "            try {\n" +
        "\n" +
        "                if (isSignup)\n" +
        "                    response.sendRedirect(issuer + \"v2/logout?client_id=\" + clientId + \"&returnTo=\" + backendDomain + \"oauth2/authorization/okta\");\n" +
        "                else if (isVerify)\n" +
        "                    response.sendRedirect(issuer + \"v2/logout?client_id=\" + clientId + \"&returnTo=\" + frontendDomain + \"verify\");\n" +
        "                else if (isExternal)\n" +
        "                    response.sendRedirect(issuer + \"v2/logout?client_id=\" + clientId + \"&returnTo=\" + frontendDomain + \"external\");\n" +
        "                else\n" +
        "                    response.sendRedirect(issuer + \"v2/logout?client_id=\" + clientId + \"&returnTo=\" + frontendDomain);\n" +
        "\n" +
        "            } catch (IOException e) {\n" +
        "                throw new RuntimeException(e);\n" +
        "            }\n" +
        "        };\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "    public CookieCsrfTokenRepository csrfTokenRepository() {\n" +
        "        CookieCsrfTokenRepository cookieCsrfTokenRepository = new CookieCsrfTokenRepository();\n" +
        "        cookieCsrfTokenRepository.setCookieCustomizer(cookie -> {\n" +
        "            cookie.domain(domainHandling.getFormattedDomain());\n" +
        "            cookie.httpOnly(false);\n" +
        "            cookie.path(\"/\");\n" +
        "            cookie.secure(false);\n" +
        "\n" +
        "        });\n" +
        "\n" +
        "\n" +
        "        return cookieCsrfTokenRepository;\n" +
        "    }\n" +
        "\n" +
        "\n" +
        "}"

    return (
        <div>

            <h1 id={"corso"} className={"text-center"}>Corso</h1>

            <div className={"grid grid-cols-12 p-12"}>
                <div className={"col-span-6 text-center"}>
                    <h2>My Past Projects</h2>
                    <p>These are some of my past projects</p>
                </div>
                <div className={"col-span-6 text-center"}>
                    <h2>Github</h2>
                    <div className={"flex justify-center max-h-96"}>
                    <SyntaxHighlighter language="java" style={atomDark}>
                        {codeString}
                    </SyntaxHighlighter>
                    </div>
                </div>
            </div>

        </div>
    )
        ;
}