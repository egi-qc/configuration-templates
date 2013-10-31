#############################################################################
# Copyright (c) Members of the EGEE Collaboration. 2004.
# See http://www.eu-egee.org/partners/ for details on the copyright
# holders.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS
# OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
##############################################################################
#
# NAME :            glite-voms_mysql
#
# DESCRIPTION : This function configures the parameters for voms mysql.

# AUTHORS :     yaim-contact@cern.ch
#
# NOTES :
#
# YAIM MODULE:  glite-yaim-voms
#
##############################################################################

# Java Location
JAVA_LOCATION="/usr/java/default"

# MySQL Password
MYSQL_PASSWORD="set_a_good_password"
SITE_NAME=UMD-VERIFICATION

# VO List
VOS="ops.vo.ibergrid.eu"

# VOMS server hostname
VOMS_HOST="test10.egi.cesga.es"


# Hostname of the database server. Put 'localhost'
# if you run the database on the same machine.
# This parameter can be specified per VO in the following way:
# VO_<vo_name>_VOMS_ADMIN_DB_HOST
VOMS_ADMIN_DB_HOST="localhost"


# Host to which voms-admin-service-generated emails should
# be submitted. Use 'localhost' if you have an fully configured SMTP
# server running on this host. Otherwise specify the hostname of a working
# SMTP submission service.
# This parameter can be specified per VO in the following way:
# VO_<vo_name>_VOMS_ADMIN_SMTP_HOST
VOMS_ADMIN_SMTP_HOST="localhost"


# The UNIX group that Tomcat is run under
# voms admin default is tomcat 5
# VOMS_ADMIN_TOMCAT_GROUP=new_value


# The UNIX group that the VOMS core service is run under
# voms admin default is voms
# VOMS_ADMIN_VOMS_GROUP=new_value


# You do not need to deploy the databases
# They have been copied from a mysql dump
VOMS_DB_DEPLOY="true"


# The path of the certificate file (in pem format) of an initial VO administrator.
# The VO will be set up so that this user has full VO administration
# privileges.
# Uncomment this variable if you want to set up an initial VO administrator.
# This parameter can be specified per VO in the following way:
# VO_<vo_name>_VOMS_ADMIN_CERT
# VOMS_ADMIN_CERT=user_certificate

VOMS_ADMIN_MEMBERSHIP_REQUEST_LIFETIME=-1

