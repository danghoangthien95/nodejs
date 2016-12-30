request("http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=" + 30000 , function (err, response, body) {
		// body...
		if(err) {
			console.log('Error ', err);
			res.send('da co co loi xay ra');
		} else {
			$ = cheerio.load(body);
			var name = $(body).find("span#ctl00_ContentPlaceHolder1_lblName");
			var domain = $(body).find("span#ctl00_ContentPlaceHolder1_lblDomain");
			var representer = $(body).find("span#ctl00_ContentPlaceHolder1_lblRepresenter");
			var companyName = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyName");
			var taxCode = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyTaxCode");
			var address = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyAddress");
			var department = $(body).find("span#ctl00_ContentPlaceHolder1_lblDepartmentName");
			var national = $(body).find("span#ctl00_ContentPlaceHolder1_lblNationalName");
			var phone = $(body).find("span#ctl00_ContentPlaceHolder1_lblCompanyPhone");
			res.render('trangchu',	{name: name,
									domain: domain,
									representer: representer,
									companyName: companyName,
									taxCode: taxCode,
									address: address,
									department: department,
									national: national,
									phone: phone})
		}
	})


,
									{domain: domain},
									{representer: representer},
									{companyName: companyName},
									{taxCode: taxCode},
									{address: address},
									{department: department},
									{national: national},
									{phone: phone}


<% domain.each(function (i, e) { %>
	<h3>Địa chỉ tên miền: <%= $('span#ctl00_ContentPlaceHolder1_lblDomain').text() %></h3>
<% })%>
<% representer.each(function (i, e) { %>
	<h3>Người chịu trách nhiệm: <%= $('span#ctl00_ContentPlaceHolder1_lblRepresenter').text() %></h3>
<% })%>
<% companyName.each(function (i, e) { %>
	<h3>Tên Doanh nghiệp: <%= $('span#ctl00_ContentPlaceHolder1_lblCompanyName').text() %></h3>
<% })%>
<% taxCode.each(function (i, e) { %>
	<h3>MST/ĐKKD/QĐTL: <%= $('span#ctl00_ContentPlaceHolder1_lblCompanyTaxCode').text() %></h3>
<% })%>
<% address.each(function (i, e) { %>
	<h3>Trụ sở Doanh nghiệp: <%= $('span#ctl00_ContentPlaceHolder1_lblCompanyAddress').text() %></h3>
<% })%>
<% department.each(function (i, e) { %>
	<h3>Tỉnh/Thành phố: <%= $('span#ctl00_ContentPlaceHolder1_lblDepartmentName').text() %></h3>
<% })%>
<% national.each(function (i, e) { %>
	<h3>Quốc gia: <%= $('span#ctl00_ContentPlaceHolder1_lblNationalName').text() %></h3>
<% })%>
<% phone.each(function (i, e) { %>
	<h3>Điện thoại: <%= $('span#ctl00_ContentPlaceHolder1_lblCompanyPhone').text() %></h3>
<% })%>

