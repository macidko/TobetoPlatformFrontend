import { GetEducationByUserIdList } from './../models/responses/userProfile/getEducationByUserId';
import { GetSocialMediaAccountByUserIdList } from './../models/responses/userProfile/getSocialMediaAccountByUserId';
import { GetUserDetails } from './../models/responses/userProfile/getUserDetails';
import { GetByUserId } from "../models/responses/user/getByUserId";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../core/environment/environment";
import axios, { AxiosResponse } from "axios";
import { GetByIdUserProfile } from "../models/responses/userProfile/getByIdUserProfile";
import { GetUserProfile } from "../models/responses/userProfile/getUserProfile";
import { AddUserProfileRequest } from "../models/requests/userProfile/addUserProfileRequest";
import { AddUserProfileResponse } from "../models/responses/userProfile/addUserProfileResponse";
import { UpdateUserProfileRequest } from "../models/requests/userProfile/updateUserProfileRequest";
import { UpdateUserProfileResponse } from "../models/responses/userProfile/updateUserProfileResponse";
import { GetGraduationByUserId, GetGraduationByUserIdList } from "../models/responses/userProfile/getGraduationByUserId";
import { GetExperienceByUserIdList } from "../models/responses/userProfile/getExperienceByUserId";
import errorInstance from '../core/interceptors/errorInterceptor';
import { GetLanguageByUserIdList } from '../models/responses/userProfile/getLanguageByUserId';
import { GetSkillByUserIdList } from '../models/responses/userProfile/getSkillByUserId';

class UserProfileService extends BaseService<
  GetUserProfile,
  GetByIdUserProfile,
  AddUserProfileRequest,
  AddUserProfileResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse
> {
  public User : string;
  public Graduation: string;
  public Experience: string;
  public Skill :string;
  public Language:string;
  public Education:string;
  public SocialMediaAccount:string;
  constructor() {
    super();
    this.apiUrl = BASE_API_URL + "UserProfiles";
    this.User = BASE_API_URL + "Users";
    this.dtoUrl = this.apiUrl + "/getUserDetail"
    this.Graduation = this.apiUrl + "/getAllGraduation" 
    this.Experience = this.apiUrl + "/getAllExperience"
    this.Skill = this.apiUrl +"/getAllSkill"
    this.Language = this.apiUrl + "/getAllLanguage"
    this.Education = this.apiUrl + "/getAllEducations"
    this.SocialMediaAccount = this.apiUrl + "/getAllSocialMediaAccount"
  }
  getByUserId(id: number): Promise<AxiosResponse<GetByUserId, any>> {
    return axios.get<GetByUserId>(this.User + "/" + id);
  }

  getUserDetails(id: number): Promise<AxiosResponse<GetUserDetails, any>> {
		return axios.get<GetUserDetails>(this.dtoUrl + "/" + id);
	}

  getGraduationByUserId(id: number): Promise<AxiosResponse<GetGraduationByUserIdList, any>> {
		return axios.get<GetGraduationByUserIdList>(this.Graduation + "/" + id);
	}

  getExperienceByUserId(id: number): Promise<AxiosResponse<GetExperienceByUserIdList, any>> {
		return errorInstance.get<GetExperienceByUserIdList>(this.Experience + "/" + id);
	}

  getSkillByUserId(id: number): Promise<AxiosResponse<GetSkillByUserIdList, any>> {
		return errorInstance.get<GetSkillByUserIdList>(this.Skill + "/" + id);
	}

  getEducationByUserId(id: number): Promise<AxiosResponse<GetEducationByUserIdList, any>> {
		return errorInstance.get<GetEducationByUserIdList>(this.Education + "/" + id);
	}

  getLanguageByUserId(id: number): Promise<AxiosResponse<GetLanguageByUserIdList, any>> {
		return axios.get<GetLanguageByUserIdList>(this.Language + "/" + id);
	}

  addUserProfile(id: number, request: GetUserDetails): Promise<AxiosResponse<GetUserDetails, any>>{
    return errorInstance.post<GetUserDetails>(this.apiUrl, request)
  }

  updateUserProfile(id: number, request: GetByIdUserProfile): Promise<AxiosResponse<GetUserDetails, any>>{
    return axios.put<GetUserDetails>(this.apiUrl, request)
  }

  getSocialMediaAccountByUserId(id: number): Promise<AxiosResponse<GetSocialMediaAccountByUserIdList, any>> {
		return errorInstance.get<GetSocialMediaAccountByUserIdList>(this.SocialMediaAccount + "/" + id);
	}
}

export default new UserProfileService();
