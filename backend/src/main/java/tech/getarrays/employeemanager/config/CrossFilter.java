package tech.getarrays.employeemanager.config;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CrossFilter implements Filter{

	public void init(FilterConfig fc) 
	{
		
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletResponse rep=(HttpServletResponse) response;
		HttpServletRequest req=(HttpServletRequest) request;
		rep.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		rep.setHeader("Access-Control-Allow-Methods", "POST,PUT,GET,OPTIONS,DELETE");
		rep.setHeader("Access-Control-Max-Age", "3600");
		rep.setHeader("Access-Control-Allow-Credentials", "true");
		rep.setHeader("Access-Control-Allow-Headers",
				"x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN"
				);
		if("OPTIONS".equalsIgnoreCase(req.getMethod())) 
		{
			rep.setStatus(HttpServletResponse.SC_OK);
		}
		else 
		{
			chain.doFilter(request, response);
		}
		
		
	}

}
